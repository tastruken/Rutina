/* ==========================================================================
   PROGRESS HISTORY CONTROLLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadAndRenderHistory();
});

function loadAndRenderHistory() {
  const historyTree = document.getElementById("historyTreeContainer");
  
  // Read raw storage
  const months = getStoredData("routine_history_months");
  const weeks = getStoredData("routine_history_weeks");
  const draft = getStoredDataObj("routine_active_week_draft");
  
  const hasDraftData = Object.keys(draft).length > 0;

  // Calculate stats
  const totalMonths = months.length;
  const totalWeeks = (totalMonths * 4) + weeks.length;
  const totalWorkouts = calculateTotalWorkouts(months, weeks);

  // Update UI Stats Cards
  document.getElementById("statTotalWorkouts").textContent = totalWorkouts;
  document.getElementById("statTotalWeeks").textContent = totalWeeks;
  document.getElementById("statTotalMonths").textContent = totalMonths;

  // Render tree
  historyTree.innerHTML = "";

  if (totalMonths === 0 && weeks.length === 0 && !hasDraftData) {
    document.getElementById("historyStatusBadge").textContent = "SIN REGISTROS";
    historyTree.innerHTML = `
      <div class="empty-history-message">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <h3 class="empty-title">Historial Vacío</h3>
        <p class="empty-desc">Aún no has archivado ninguna semana ni guardado entrenamientos. Comienza a marcar tus días en el diario activo.</p>
      </div>
    `;
    return;
  }

  document.getElementById("historyStatusBadge").textContent = `${totalWeeks} SEMANA(S) ARCHIVADA(S)`;

  // 1. Render Active Week Draft at the top (if it has any finalized days)
  if (hasDraftData) {
    const draftGroupEl = document.createElement("div");
    draftGroupEl.className = "active-period-group";
    draftGroupEl.innerHTML = `<h3 class="period-group-title">Semana en Curso (Diario Activo)</h3>`;
    
    const tempWeek = {
      id: "active_week_draft",
      dateRange: "Semana Activa (En progreso)",
      days: {}
    };

    const daysOrder = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    daysOrder.forEach(dayKey => {
      if (draft[dayKey]) {
        tempWeek.days[dayKey] = draft[dayKey];
      } else {
        tempWeek.days[dayKey] = daysDataPlaceholder(dayKey);
      }
    });

    const weekEl = renderWeekBlock(tempWeek, "Activa");
    draftGroupEl.appendChild(weekEl);
    historyTree.appendChild(draftGroupEl);
  }

  // 2. Render Months
  months.forEach((month) => {
    const monthEl = renderMonthBlock(month);
    historyTree.appendChild(monthEl);
  });

  // 3. Render standalone weeks in current buffer (not grouped into a month yet)
  if (weeks.length > 0) {
    const activePeriodEl = document.createElement("div");
    activePeriodEl.className = "active-period-group";
    activePeriodEl.innerHTML = `<h3 class="period-group-title">Semanas Archivadas (Mes Actual)</h3>`;
    
    weeks.forEach((week, index) => {
      // Standalone week number is calculated based on preceding months
      const overallWeekNum = (totalMonths * 4) + index + 1;
      const weekEl = renderWeekBlock(week, overallWeekNum);
      activePeriodEl.appendChild(weekEl);
    });

    historyTree.appendChild(activePeriodEl);
  }
}

/* ==========================================================================
   BLOCK RENDERERS
   ========================================================================== */

function renderMonthBlock(month) {
  const monthCard = document.createElement("div");
  monthCard.className = "history-month-card";
  
  // Header
  const header = document.createElement("div");
  header.className = "month-header";
  const label = month.monthName || `Mes ${month.monthNum}`;
  header.innerHTML = `
    <div class="header-title-group">
      <svg class="toggle-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <span class="month-label">${label}</span>
    </div>
    <span class="month-meta">${month.weeks.length} Semanas</span>
  `;

  // Body container for weeks
  const body = document.createElement("div");
  body.className = "month-weeks-body";
  
  month.weeks.forEach((week, index) => {
    const overallWeekNum = ((month.monthNum - 1) * 4) + index + 1;
    const weekEl = renderWeekBlock(week, overallWeekNum);
    body.appendChild(weekEl);
  });

  header.addEventListener("click", () => {
    monthCard.classList.toggle("expanded");
  });

  monthCard.appendChild(header);
  monthCard.appendChild(body);
  return monthCard;
}

function renderWeekBlock(week, weekNum) {
  const weekCard = document.createElement("div");
  weekCard.className = "history-week-card";

  // Header
  const header = document.createElement("div");
  header.className = "week-header";
  header.innerHTML = `
    <div class="header-title-group">
      <svg class="toggle-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <span class="week-label">Semana ${weekNum}</span>
      <span class="week-dates">${week.dateRange || ""}</span>
    </div>
    <span class="badge badge-green">${countCompletedDays(week)}/7 Días</span>
  `;

  // Body container for days
  const body = document.createElement("div");
  body.className = "week-days-body";

  const daysOrder = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
  daysOrder.forEach((dayKey) => {
    const dayData = week.days[dayKey];
    if (dayData) {
      const dayEl = renderDayRow(dayData);
      body.appendChild(dayEl);
    }
  });

  header.addEventListener("click", (e) => {
    // Prevent toggling parent month when clicking week
    e.stopPropagation();
    weekCard.classList.toggle("expanded");
  });

  weekCard.appendChild(header);
  weekCard.appendChild(body);
  return weekCard;
}

function renderDayRow(day) {
  const dayRow = document.createElement("div");
  dayRow.className = "history-day-row";

  // Check state of day
  let statusBadgeHTML = "";
  if (day.isPending) {
    statusBadgeHTML = `<span class="badge badge-yellow" style="background-color: rgba(245, 158, 11, 0.15); color: #FBBF24;">Pendiente</span>`;
  } else if (day.isRest) {
    statusBadgeHTML = `<span class="badge badge-blue">Recuperación</span>`;
  } else if (day.noWorkout) {
    statusBadgeHTML = `<span class="badge badge-red">Descanso</span>`;
  } else {
    statusBadgeHTML = `<span class="badge badge-green">Entrenado</span>`;
  }

  // Header row for day
  const dayHeader = document.createElement("div");
  dayHeader.className = "history-day-header";
  dayHeader.innerHTML = `
    <div class="day-left">
      <span class="day-name-tag">${day.name}</span>
      <div class="day-title-wrapper">
        <span class="day-routine-type">${day.routineType}</span>
        <h4 class="day-title-text">${day.title}</h4>
      </div>
    </div>
    <div class="day-right">
      ${statusBadgeHTML}
      <svg class="expand-day-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  `;

  // Content body for day (exercises and supplements details)
  const dayContent = document.createElement("div");
  dayContent.className = "history-day-content";

  // Build Exercises Detail
  let exercisesHTML = "";
  if (day.isPending) {
    exercisesHTML = `<p class="history-empty-text">Este día aún no ha sido registrado en el diario activo.</p>`;
  } else if (day.isRest) {
    exercisesHTML = `<p class="history-empty-text">Día de recuperación muscular programada.</p>`;
  } else if (day.noWorkout) {
    exercisesHTML = `<p class="history-empty-text">No se registraron series de entrenamiento este día.</p>`;
  } else {
    day.exercises.forEach((ex) => {
      // Format sets done
      const setsDoneHTML = ex.setsDone.map(set => {
        const checkIcon = set.completed ? "✓" : "✗";
        const checkClass = set.completed ? "completed" : "failed";
        const repText = set.reps ? `${set.reps} reps` : "0 reps";
        return `
          <span class="history-set-badge ${checkClass}">
            S${set.setNum}: ${repText} (${checkIcon})
          </span>
        `;
      }).join("");

      exercisesHTML += `
        <div class="history-exercise-item">
          <div class="ex-item-info">
            <h5 class="ex-item-name">${ex.name}</h5>
            <span class="ex-item-meta">${ex.sets} Series • Objetivo: ${ex.repsRule}</span>
          </div>
          <div class="ex-item-sets">
            ${setsDoneHTML}
          </div>
        </div>
      `;
    });
  }

  // Build Supplements Detail
  let supplementsHTML = "";
  if (!day.isPending && day.supplements && day.supplements.length > 0) {
    const itemsHTML = day.supplements.map(supp => {
      const checkIcon = supp.completed ? "✓" : "✗";
      const checkClass = supp.completed ? "completed" : "failed";
      return `<span class="supp-history-tag ${checkClass}">${supp.name} (${checkIcon})</span>`;
    }).join("");
    supplementsHTML = `
      <div class="supps-history-block">
        <h5 class="supps-history-title">Suplementación</h5>
        <div class="supps-history-tags">
          ${itemsHTML}
        </div>
      </div>
    `;
  }

  dayContent.innerHTML = `
    <div class="day-details-container">
      <div class="day-exercises-list">
        <h5 class="history-section-subtitle">Ejercicios</h5>
        ${exercisesHTML}
      </div>
      ${supplementsHTML ? '<div class="day-details-divider"></div>' + supplementsHTML : ""}
    </div>
  `;

  // Toggle Day Expand
  dayHeader.addEventListener("click", (e) => {
    e.stopPropagation();
    dayRow.classList.toggle("expanded");
  });

  dayRow.appendChild(dayHeader);
  dayRow.appendChild(dayContent);
  return dayRow;
}

/* ==========================================================================
   METRIC UTILITIES & DATA PARSERS
   ========================================================================== */

function getStoredData(key) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : [];
  } catch (e) {
    console.error("Error reading key " + key, e);
    return [];
  }
}

function calculateTotalWorkouts(months, weeks) {
  let count = 0;
  
  // Count training days in months
  months.forEach(month => {
    month.weeks.forEach(week => {
      count += countTrainingDaysTrained(week);
    });
  });

  // Count training days in weeks buffer
  weeks.forEach(week => {
    count += countTrainingDaysTrained(week);
  });

  return count;
}

function countCompletedDays(week) {
  let count = 0;
  for (const dayKey in week.days) {
    const day = week.days[dayKey];
    // A day is completed/done if it's a rest day, or if it was trained
    if (day.isRest || !day.noWorkout) {
      count++;
    }
  }
  return count;
}

function countTrainingDaysTrained(week) {
  let count = 0;
  for (const dayKey in week.days) {
    const day = week.days[dayKey];
    // Count only non-rest training days that were actually trained
    if (!day.isRest && !day.noWorkout) {
      count++;
    }
  }
  return count;
}

/* ==========================================================================
   PANEL CONTROLS (EXPORT / RESET)
   ========================================================================== */

function exportHistoryData() {
  const months = getStoredData("routine_history_months");
  const weeks = getStoredData("routine_history_weeks");

  const exportObj = {
    months: months,
    weeks: weeks,
    exportedAt: new Date().toISOString()
  };

  const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", jsonString);
  downloadAnchor.setAttribute("download", `historial_entrenamiento_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function resetHistoryData() {
  if (confirm("¿Estás seguro de que deseas restablecer el historial completo de entrenamientos? Esta acción es irreversible y eliminará todos los meses y semanas registrados.")) {
    localStorage.removeItem("routine_history_months");
    localStorage.removeItem("routine_history_weeks");
    alert("Historial restablecido.");
    loadAndRenderHistory();
  }
}

function getStoredDataObj(key) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : {};
  } catch (e) {
    console.error("Error reading key " + key, e);
    return {};
  }
}

function daysDataPlaceholder(dayKey) {
  const dayNames = {
    lunes: { name: "Lunes", routineType: "PUSH 1", title: "Pecho, Hombro y Tríceps" },
    martes: { name: "Martes", routineType: "PULL 1", title: "Espalda y Bíceps" },
    miercoles: { name: "Miércoles", routineType: "LEGS", title: "Piernas y Core" },
    jueves: { name: "Jueves", routineType: "PUSH 2", title: "Pecho, Hombro y Tríceps" },
    viernes: { name: "Viernes", routineType: "PULL 2", title: "Espalda y Bíceps" },
    sabado: { name: "Sábado", routineType: "LEGS 2", title: "Piernas & Hombros Extras" },
    domingo: { name: "Domingo", routineType: "RECU.", title: "Recuperación Total", isRest: true }
  };
  
  const mapped = dayNames[dayKey];
  return {
    name: mapped.name,
    routineType: mapped.routineType,
    title: mapped.title,
    isRest: mapped.isRest || false,
    noWorkout: false,
    isPending: true,
    exercises: [],
    supplements: []
  };
}

// Expose panel triggers globally
window.exportHistoryData = exportHistoryData;
window.resetHistoryData = resetHistoryData;

