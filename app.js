/* ==========================================================================
   ROUTINES DATA STORE (with ExerciseDB GIF IDs)
   ========================================================================== */
const daysData = {
  lunes: {
    name: "Lunes",
    routineType: "PUSH 1",
    title: "Pecho, Hombro y Tríceps",
    isRest: false,
    exercises: [
      { id: "pushups_l", name: "Flexiones de brazo (Push-ups)", sets: 3, reps: "Al fallo", note: "Si se vuelven fáciles, eleva los pies en una silla o cama.", gifId: "0662" },
      { id: "floorpress_l", name: "Press de suelo unilateral", sets: 3, reps: "8 - 12 por brazo", note: "Acostado boca arriba, empuja la mancuerna al techo. El codo toca el suelo al bajar.", gifId: "0065" },
      { id: "militarypress_l", name: "Press militar unilateral", sets: 3, reps: "8 - 12 por brazo", note: "De pie. Mantén el abdomen muy firme para no inclinarte hacia los lados.", gifId: "0361" },
      { id: "lateralraises_l", name: "Elevaciones laterales a un brazo", sets: 4, reps: "12 - 15 por brazo", note: "Agárrate del marco de una puerta, inclínate ligeramente y eleva el brazo hacia el lado.", gifId: "0334" },
      { id: "overheadextensions_l", name: "Extensión de tríceps tras nuca", sets: 3, reps: "10 - 12 por brazo", note: "Sube el codo apuntando al techo y baja la mancuerna por detrás de tu cabeza.", gifId: "2188" },
      { id: "diamondups_l", name: "Flexiones diamante", sets: 2, reps: "Al fallo", note: "Manos juntas formando un diamante debajo del pecho. Excelente para rematar tríceps.", gifId: "0283" },
      { id: "cardio_l", name: "Cardio (Opcional/Recomendado)", sets: 1, reps: "10 - 15 min", note: "Jumping jacks, mountain climbers o trote en el sitio al terminar." }
    ],
    cardio: "10 - 15 minutos de cardio en casa (saltos de tijera, escaladores).",
    supplements: ["Batido de proteína (con agua)", "5g de Creatina"],
    habit: "Mientras configuras flujos de trabajo o entre tareas en la computadora, levántate cada par de horas a estirar la espalda."
  },
  martes: {
    name: "Martes",
    routineType: "PULL 1",
    title: "Espalda y Bíceps",
    isRest: false,
    exercises: [
      { id: "dbrows_m", name: "Remo unilateral con mancuerna", sets: 4, reps: "8 - 12 por brazo", note: "Apoya mano y rodilla en una silla. Tira llevando el codo hacia la cadera, no hacia arriba.", gifId: "0293" },
      { id: "pullover_m", name: "Pullover en el suelo", sets: 3, reps: "10 - 15 totales", note: "Acostado boca arriba, sujeta la mancuerna con ambas manos y llévala hacia atrás de tu cabeza.", gifId: "0375" },
      { id: "rearflyes_m", name: "Pájaros a un brazo", sets: 3, reps: "12 - 15 por brazo", note: "Inclinado hacia adelante, levanta la mancuerna hacia el lado para trabajar la parte posterior del hombro.", gifId: "0380" },
      { id: "concentrationcurl_m", name: "Curl concentrado de bíceps", sets: 3, reps: "8 - 12 por brazo", note: "Sentado, apoya el codo en la cara interna del muslo. Aísla el movimiento por completo.", gifId: "0297" },
      { id: "hammercurl_m", name: "Curl martillo cruzado", sets: 3, reps: "10 - 12 por brazo", note: "De pie, levanta la mancuerna cruzando el pecho hacia el hombro contrario.", gifId: "0313" },
      { id: "cardio_m", name: "Cardio (Opcional/Recomendado)", sets: 1, reps: "10 - 15 min", note: "Para mantener el gasto calórico elevado." }
    ],
    cardio: "10 - 15 minutos de cardio continuo.",
    supplements: ["Batido de proteína (con agua)", "5g de Creatina"],
    habit: "Piensa en tirar con el codo, no con la mano. Esto maximiza la activación de la espalda."
  },
  miercoles: {
    name: "Miércoles",
    routineType: "LEGS",
    title: "Piernas y Core",
    isRest: false,
    exercises: [
      { id: "bulgarians_mi", name: "Sentadilla Búlgara", sets: 3, reps: "8 - 12 por pierna", note: "Apoya un pie atrás en una silla. Sostén la mancuerna en la mano del lado de la pierna que trabaja.", gifId: "0410" },
      { id: "singlelegdeadlift_mi", name: "Peso muerto rumano unilateral", sets: 3, reps: "10 - 12 por pierna", note: "De pie sobre una pierna, baja la mancuerna hacia el suelo manteniendo la espalda recta. Requiere mucho equilibrio.", gifId: "1757" },
      { id: "gobletsquat_mi", name: "Sentadilla Goblet (Copa)", sets: 3, reps: "12 - 15 totales", note: "Sujeta la mancuerna con ambas manos pegada al pecho y haz sentadillas profundas.", gifId: "1760" },
      { id: "calfraise_mi", name: "Elevación de talones a un pie", sets: 4, reps: "15 - 20 por pierna", note: "Puedes pararte en el borde de un escalón o libro grueso para mayor rango de movimiento.", gifId: "0409" }
    ],
    cardio: "Ninguno hoy (recuperación de piernas).",
    supplements: ["Batido de proteína (con agua)", "5g de Creatina"],
    habit: "Como las piernas quedan cansadas, omite el cardio intenso hoy, pero haz 'snacks de movimiento' (caminar por la casa unos minutos mientras esperas que compile código o cargue una partida)."
  },
  jueves: {
    name: "Jueves",
    routineType: "PUSH 2",
    title: "Pecho, Hombro y Tríceps",
    isRest: false,
    exercises: [
      { id: "pushups_j", name: "Flexiones de brazo (Push-ups)", sets: 3, reps: "Al fallo", note: "Intenta hacer una repetición más que el lunes o bajando los pies más lento.", gifId: "0662" },
      { id: "floorpress_j", name: "Press de suelo unilateral", sets: 3, reps: "8 - 12 por brazo", note: "Acostado boca arriba, empuja la mancuerna al techo. El codo toca el suelo al bajar.", gifId: "0065" },
      { id: "militarypress_j", name: "Press militar unilateral", sets: 3, reps: "8 - 12 por brazo", note: "De pie. Mantén el abdomen muy firme para no inclinarte hacia los lados.", gifId: "0361" },
      { id: "lateralraises_j", name: "Elevaciones laterales a un brazo", sets: 4, reps: "12 - 15 por brazo", note: "Agárrate del marco de una puerta, inclínate ligeramente y eleva el brazo hacia el lado.", gifId: "0334" },
      { id: "overheadextensions_j", name: "Extensión de tríceps tras nuca", sets: 3, reps: "10 - 12 por brazo", note: "Sube el codo apuntando al techo y baja la mancuerna por detrás de tu cabeza.", gifId: "2188" },
      { id: "diamondups_j", name: "Flexiones diamante", sets: 2, reps: "Al fallo", note: "Manos juntas formando un diamante debajo del pecho. Excelente para rematar tríceps.", gifId: "0283" },
      { id: "cardio_j", name: "Cardio (Opcional/Recomendado)", sets: 1, reps: "10 - 15 min", note: "Jumping jacks, mountain climbers o trote en el sitio al terminar." }
    ],
    cardio: "10 - 15 minutos de cardio continuo.",
    supplements: ["Batido de proteína (con agua)", "5g de Creatina"],
    habit: "Intenta hacer una repetición más que la vez anterior o bajando la mancuerna aún más lento."
  },
  viernes: {
    name: "Viernes",
    routineType: "PULL 2",
    title: "Espalda y Bíceps",
    isRest: false,
    exercises: [
      { id: "dbrows_v", name: "Remo unilateral con mancuerna", sets: 4, reps: "8 - 12 por brazo", note: "Apoya mano y rodilla en una silla. Tira llevando el codo hacia la cadera.", gifId: "0293" },
      { id: "pullover_v", name: "Pullover en el suelo", sets: 3, reps: "10 - 15 totales", note: "Acostado boca arriba, sujeta la mancuerna con ambas manos y llévala hacia atrás.", gifId: "0375" },
      { id: "rearflyes_v", name: "Pájaros a un brazo", sets: 3, reps: "12 - 15 por brazo", note: "Inclinado hacia adelante, levanta la mancuerna hacia el lado para trabajar la parte posterior del hombro.", gifId: "0380" },
      { id: "concentrationcurl_v", name: "Curl concentrado de bíceps", sets: 3, reps: "8 - 12 por brazo", note: "Sentado, apoya el codo en la cara interna del muslo. Aísla el movimiento.", gifId: "0297" },
      { id: "hammercurl_v", name: "Curl martillo cruzado", sets: 3, reps: "10 - 12 por brazo", note: "De pie, levanta la mancuerna cruzando el pecho hacia el hombro contrario.", gifId: "0313" },
      { id: "cardio_v", name: "Cardio (Opcional/Recomendado)", sets: 1, reps: "10 - 15 min", note: "Para mantener el gasto calórico elevado." }
    ],
    cardio: "10 - 15 minutos de cardio.",
    supplements: ["Batido de proteína (con agua)", "5g de Creatina"],
    habit: "Gran enfoque en apretar la espalda arriba en cada repetición.",
    nutrition: "Si para cerrar la semana laboral decides pedir algo a domicilio, como sushi o pizza, disfrútalo sin culpa, pero procura que tus comidas anteriores del día hayan sido muy ligeras y altas en proteína."
  },
  sabado: {
    name: "Sábado",
    routineType: "LEGS 2",
    title: "Piernas & Hombros Extras",
    isRest: false,
    exercises: [
      { id: "bulgarians_s", name: "Sentadilla Búlgara", sets: 3, reps: "8 - 12 por pierna", note: "Apoya un pie atrás en una silla. Sostén la mancuerna en la mano del lado de la pierna que trabaja.", gifId: "0410" },
      { id: "singlelegdeadlift_s", name: "Peso muerto rumano unilateral", sets: 3, reps: "10 - 12 por pierna", note: "De pie sobre una pierna, baja la mancuerna hacia el suelo manteniendo la espalda recta.", gifId: "1757" },
      { id: "gobletsquat_s", name: "Sentadilla Goblet (Copa)", sets: 3, reps: "12 - 15 totales", note: "Sujeta la mancuerna con ambas manos pegada al pecho y haz sentadillas profundas.", gifId: "1760" },
      { id: "calfraise_s", name: "Elevación de talones a un pie", sets: 4, reps: "15 - 20 por pierna", note: "Puedes pararte en el borde de un escalón o libro grueso.", gifId: "0409" },
      { id: "lateralraises_s", name: "Elevaciones laterales a un brazo", sets: 4, reps: "12 - 15 por brazo", note: "Estímulo extra para la anchura de tus hombros. El hombro lateral se recupera rápido.", gifId: "0334" }
    ],
    cardio: "Ninguno hoy.",
    supplements: ["Batido de proteína (con agua)", "5g de Creatina"],
    habit: "El hombro lateral se recupera rápido y esto te ayudará a verte más ancho de arriba más pronto."
  },
  domingo: {
    name: "Domingo",
    routineType: "RECU.",
    title: "Recuperación Total",
    isRest: true,
    exercises: [],
    cardio: "Cero pesas. Descanso absoluto para que el tejido muscular crezca.",
    supplements: ["5g de Creatina con agua (Obligatorio)", "Batido de proteína (Opcional hoy)"],
    habit: "Aprovecha de hacer algo de actividad muy ligera si te provoca (una caminata suave o estiramientos)."
  }
};

const daysOrder = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

/* ==========================================================================
   APP STATE
   ========================================================================== */
let activeDay = "lunes";

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  setInitialDay();
  renderDaysNav();
  renderActiveDayContent();
  setupKeyboardNavigation();
  updateHeaderDate();
  setupGlobalModalEscKey();
});

function updateHeaderDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('es-ES', options);
  // Capitalize first letter
  const formattedDate = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  document.getElementById("currentDateString").textContent = formattedDate;
}

function setInitialDay() {
  const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  const mappedDays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  activeDay = mappedDays[dayIndex];
}

/* ==========================================================================
   NAVIGATION RENDERING & EVENT HANDLERS
   ========================================================================== */
function renderDaysNav() {
  const navWrapper = document.getElementById("daysNav");
  navWrapper.innerHTML = "";

  daysOrder.forEach((dayKey) => {
    const dayData = daysData[dayKey];
    const button = document.createElement("button");
    button.className = `day-btn ${dayKey === activeDay ? "active" : ""}`;
    button.setAttribute("data-day", dayKey);
    button.setAttribute("tabindex", "0");
    
    // Check if day is finalized
    if (isDayFinalized(dayKey)) {
      button.classList.add("completed");
    }

    button.innerHTML = `
      <span class="day-name">${dayKey.substring(0, 3)}</span>
      <span class="day-routine-name">${dayData.routineType}</span>
      <span class="day-completion-dot"></span>
    `;

    button.addEventListener("click", () => {
      if (activeDay === dayKey) return;
      switchDay(dayKey);
    });

    navWrapper.appendChild(button);
  });
}

function switchDay(targetDay) {
  // Exit transitions (smooth fade out)
  const cardsToAnimate = [
    document.getElementById("routineCard"),
    document.getElementById("cardioCard"),
    document.getElementById("habitsCard")
  ];

  cardsToAnimate.forEach((card) => {
    card.classList.add("transition-exit");
    card.classList.add("transition-exit-active");
  });

  setTimeout(() => {
    // Update State
    activeDay = targetDay;
    
    // Render new content
    renderActiveDayContent();
    
    // Update Navigation buttons
    document.querySelectorAll(".day-btn").forEach((btn) => {
      const isCurrent = btn.getAttribute("data-day") === targetDay;
      btn.className = `day-btn ${isCurrent ? "active" : ""}`;
      if (isDayFinalized(btn.getAttribute("data-day"))) {
        btn.classList.add("completed");
      }
    });

    // Enter transitions (smooth fade in)
    cardsToAnimate.forEach((card) => {
      card.classList.remove("transition-exit", "transition-exit-active");
      card.classList.add("transition-enter");
      
      // Force repaint
      void card.offsetWidth;
      
      card.classList.add("transition-enter-active");
    });

    // Cleanup transition classes after completion
    setTimeout(() => {
      cardsToAnimate.forEach((card) => {
        card.classList.remove("transition-enter", "transition-enter-active");
      });
    }, 250);

  }, 150); // Matches exit transition time
}

/* ==========================================================================
   CONTENT RENDERING
   ========================================================================== */
function renderActiveDayContent() {
  const day = daysData[activeDay];
  
  // Update Header Elements
  document.getElementById("routineType").textContent = day.routineType;
  document.getElementById("routineTitle").textContent = day.title;

  // Render Exercise List
  const exercisesWrapper = document.getElementById("exercisesList");
  exercisesWrapper.innerHTML = "";

  if (day.isRest) {
    // Rest day screen
    document.getElementById("completionStatus").style.display = "none";
    exercisesWrapper.innerHTML = `
      <div class="rest-day-message">
        <h3 class="rest-title">Cero Pesas</h3>
        <p class="rest-desc">Descanso absoluto para que el tejido muscular crezca. Asegúrate de comer suficiente proteína y mantenerte hidratado.</p>
        
        <div class="archive-section">
          <div class="archive-divider"></div>
          <div class="archive-card">
            <h4 class="archive-title">¿Completaste tu semana?</h4>
            <p class="archive-desc">Archiva el progreso de esta semana en el historial y vacía el diario activo para comenzar la siguiente.</p>
            <button class="archive-btn" onclick="archiveActiveWeek()">Archivar Semana Activa</button>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById("completionStatus").style.display = "inline-block";
    const isFinalized = getLocalStorageValue(`day_finalized_${activeDay}`) === "true";
    const disabledAttr = isFinalized ? "disabled" : "";
    
    day.exercises.forEach((ex, index) => {
      const exerciseRow = document.createElement("div");
      
      // Check if all sets for this exercise are completed
      const allSetsDone = isExerciseCompleted(activeDay, ex.id, ex.sets);
      exerciseRow.className = `exercise-row ${allSetsDone ? "completed" : ""}`;
      exerciseRow.setAttribute("id", `row-${ex.id}`);

      // Order indicator
      const orderNum = (index + 1).toString().padStart(2, '0');

      let setsHTML = "";
      for (let s = 0; s < ex.sets; s++) {
        const checkboxId = `chk-${activeDay}-${ex.id}-${s}`;
        const inputId = `rep-${activeDay}-${ex.id}-${s}`;
        
        const isChecked = getLocalStorageValue(checkboxId) === "true";
        const loggedReps = getLocalStorageValue(inputId) || "";

        setsHTML += `
          <div class="set-track-item">
            <span class="set-label">S${s + 1}</span>
            <input type="text" 
                   class="rep-input" 
                   id="${inputId}" 
                   placeholder="reps" 
                   value="${loggedReps}" 
                   ${disabledAttr}
                   aria-label="Repeticiones para serie ${s + 1}"
                   oninput="saveRepLog('${inputId}', '${activeDay}', '${ex.id}', ${ex.sets})">
            
            <input type="checkbox" 
                   id="${checkboxId}" 
                   class="set-checkbox" 
                   ${isChecked ? "checked" : ""} 
                   ${disabledAttr}
                   onchange="toggleSetCheckbox('${checkboxId}', '${activeDay}', '${ex.id}', ${ex.sets})">
            <label for="${checkboxId}" class="set-checkbox-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </label>
          </div>
        `;
      }

      // Technique Button (triggers modal layout instead of inline drawers)
      let techButtonHTML = "";
      if (ex.gifId) {
        // Escape quotes to prevent syntax issues
        const cleanName = ex.name.replace(/'/g, "\\'");
        const cleanNote = ex.note.replace(/'/g, "\\'");
        
        techButtonHTML = `
          <button class="tech-btn" onclick="showTechniqueModal('${cleanName}', '${cleanNote}', '${ex.gifId}')">
            Ver Técnica
          </button>
        `;
      }

      exerciseRow.innerHTML = `
        <div class="exercise-meta-row">
          <div class="exercise-info">
            <span class="exercise-num">${orderNum}</span>
            <div class="exercise-name-wrapper">
              <div class="exercise-title-row">
                <h3 class="exercise-name">${ex.name}</h3>
                ${techButtonHTML}
              </div>
              <p class="exercise-notes">${ex.note}</p>
            </div>
          </div>
          <div class="exercise-badge-container">
            <span class="badge ${getBadgeColor(ex.reps)}">${ex.sets} SERIES • ${ex.reps}</span>
          </div>
        </div>
        
        <div class="exercise-tracking">
          <span class="section-block-title">COMPLETAR SERIES</span>
          <div class="sets-group">
            ${setsHTML}
          </div>
        </div>
      `;

      exercisesWrapper.appendChild(exerciseRow);
    });

    // Render Finalize Day Button or Day Finalized Banner at the bottom of exercise list
    const actionContainer = document.createElement("div");
    if (isFinalized) {
      actionContainer.className = "day-finalized-banner";
      actionContainer.innerHTML = `
        <div class="banner-left">
          <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Día Registrado y Guardado</span>
        </div>
        <button class="btn-modify-day" onclick="modifyDay('${activeDay}')">Modificar Registro</button>
      `;
    } else {
      actionContainer.className = "day-action-row";
      actionContainer.innerHTML = `
        <button class="btn-finalize-day" onclick="finalizeDay('${activeDay}')">Marcar Día como Listo</button>
      `;
    }
    exercisesWrapper.appendChild(actionContainer);
  }

  // Render Cardio & Nutrition/Habits Cards
  document.getElementById("cardioText").textContent = day.cardio;

  // Render Supplements List
  const supplementsWrapper = document.getElementById("supplementsList");
  supplementsWrapper.innerHTML = "";
  
  const isFinalized = getLocalStorageValue(`day_finalized_${activeDay}`) === "true";
  const disabledAttr = isFinalized ? "disabled" : "";

  day.supplements.forEach((supp, index) => {
    const suppId = `supp-${activeDay}-${index}`;
    const isChecked = getLocalStorageValue(suppId) === "true";

    const suppItem = document.createElement("label");
    suppItem.className = "supplement-item";
    suppItem.innerHTML = `
      <input type="checkbox" id="${suppId}" class="supp-checkbox" ${isChecked ? "checked" : ""} ${disabledAttr} onchange="toggleSupplement('${suppId}')">
      <div class="supp-checkbox-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="supp-name">${supp}</span>
    `;
    supplementsWrapper.appendChild(suppItem);
  });

  // Render Habit
  document.getElementById("habitText").textContent = day.habit;

  // Render Nutrition Tip (if applicable, else hide)
  const nutritionBlock = document.getElementById("nutritionBlock");
  if (day.nutrition) {
    document.getElementById("nutritionText").textContent = day.nutrition;
    nutritionBlock.style.display = "block";
  } else {
    nutritionBlock.style.display = "none";
  }

  // Update Progress Badge
  updateCompletionBadge();
}

/* ==========================================================================
   STATE MANAGERS & STORAGE SYNCS
   ========================================================================== */
function toggleSetCheckbox(checkboxId, dayKey, exerciseId, totalSets) {
  const checkbox = document.getElementById(checkboxId);
  setLocalStorageValue(checkboxId, checkbox.checked);

  // Update single row layout styling
  const exerciseRow = document.getElementById(`row-${exerciseId}`);
  const allDone = isExerciseCompleted(dayKey, exerciseId, totalSets);
  if (allDone) {
    exerciseRow.classList.add("completed");
  } else {
    exerciseRow.classList.remove("completed");
  }

  // Sync completion states
  updateCompletionBadge();
  syncNavCompletedDot(dayKey);
}

function saveRepLog(inputId, dayKey, exerciseId, totalSets) {
  const inputEl = document.getElementById(inputId);
  setLocalStorageValue(inputId, inputEl.value);
}

function toggleSupplement(suppId) {
  const checkbox = document.getElementById(suppId);
  setLocalStorageValue(suppId, checkbox.checked);
}

/* ==========================================================================
   GLOBAL OVERLAY MODAL CONTROLLERS
   ========================================================================== */
function showTechniqueModal(name, note, gifId) {
  const modal = document.getElementById("techModal");
  const modalName = document.getElementById("modalExName");
  const modalNote = document.getElementById("modalExNote");
  const modalGif = document.getElementById("modalExGif");

  if (!modal || !modalName || !modalNote || !modalGif) return;

  // Set Modal Contents
  modalName.textContent = name;
  modalNote.textContent = note;
  
  // Lazy load the GIF
  modalGif.src = `https://raw.githubusercontent.com/omercotkd/exercises-gifs/main/assets/${gifId}.gif`;

  // Display Modal Overlay (Trigger scale and fade-in)
  modal.classList.add("open");
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeTechniqueModal(event) {
  // If event exists, prevent closing if clicked inside the modal content
  if (event && event.target.closest(".modal-content") && !event.target.closest(".modal-close-btn")) {
    return;
  }

  const modal = document.getElementById("techModal");
  const modalGif = document.getElementById("modalExGif");

  if (!modal) return;

  modal.classList.remove("open");
  document.body.style.overflow = ""; // Enable background scrolling

  // Wait for transitions to finish before clearing source to avoid flash
  setTimeout(() => {
    if (!modal.classList.contains("open") && modalGif) {
      modalGif.src = "";
    }
  }, 300);
}

function setupGlobalModalEscKey() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeTechniqueModal();
    }
  });
}

// Expose globally
window.showTechniqueModal = showTechniqueModal;
window.closeTechniqueModal = closeTechniqueModal;

/* Completion Metrics Helpers */
function updateCompletionBadge() {
  const day = daysData[activeDay];
  if (day.isRest) return;

  let totalSets = 0;
  let completedSets = 0;

  day.exercises.forEach((ex) => {
    totalSets += ex.sets;
    for (let s = 0; s < ex.sets; s++) {
      const checkboxId = `chk-${activeDay}-${ex.id}-${s}`;
      if (getLocalStorageValue(checkboxId) === "true") {
        completedSets++;
      }
    }
  });

  const badgeEl = document.getElementById("completionStatus");
  badgeEl.textContent = `${completedSets} / ${totalSets} COMPLETADO`;

  // Toggle green/volt color according to progress
  if (completedSets === totalSets && totalSets > 0) {
    badgeEl.className = "badge badge-green";
  } else {
    badgeEl.className = "badge badge-volt";
  }
}

function isExerciseCompleted(dayKey, exerciseId, totalSets) {
  for (let s = 0; s < totalSets; s++) {
    const checkboxId = `chk-${dayKey}-${exerciseId}-${s}`;
    if (getLocalStorageValue(checkboxId) !== "true") {
      return false;
    }
  }
  return true;
}

function isDayCompleted(dayKey) {
  const day = daysData[dayKey];
  if (day.isRest) return false;

  let totalSets = 0;
  let completedSets = 0;

  day.exercises.forEach((ex) => {
    totalSets += ex.sets;
    for (let s = 0; s < ex.sets; s++) {
      const checkboxId = `chk-${dayKey}-${ex.id}-${s}`;
      if (getLocalStorageValue(checkboxId) === "true") {
        completedSets++;
      }
    }
  });

  return completedSets === totalSets && totalSets > 0;
}

function syncNavCompletedDot(dayKey) {
  const btn = document.querySelector(`.day-btn[data-day="${dayKey}"]`);
  if (btn) {
    if (isDayFinalized(dayKey)) {
      btn.classList.add("completed");
    } else {
      btn.classList.remove("completed");
    }
  }
}

/* LocalStorage wrapper functions */
function setLocalStorageValue(key, val) {
  localStorage.setItem(key, val);
}

function getLocalStorageValue(key) {
  return localStorage.getItem(key);
}

/* Styling Helpers */
function getBadgeColor(reps) {
  if (reps.toLowerCase().includes("fallo")) {
    return "badge-red";
  } else if (reps.toLowerCase().includes("min")) {
    return "badge-yellow";
  } else {
    return "badge-volt";
  }
}

/* ==========================================================================
   ACCESSIBILITY & KEYBOARD NAVIGATION
   ========================================================================== */
function setupKeyboardNavigation() {
  const navWrapper = document.getElementById("daysNav");

  navWrapper.addEventListener("keydown", (e) => {
    const currentBtn = document.activeElement;
    if (!currentBtn || !currentBtn.classList.contains("day-btn")) return;

    const currentDay = currentBtn.getAttribute("data-day");
    const currentIndex = daysOrder.indexOf(currentDay);
    let nextIndex;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % daysOrder.length;
      focusAndClickNavButton(nextIndex);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + daysOrder.length) % daysOrder.length;
      focusAndClickNavButton(nextIndex);
    }
  });
}

function focusAndClickNavButton(index) {
  const nextDayKey = daysOrder[index];
  const nextBtn = document.querySelector(`.day-btn[data-day="${nextDayKey}"]`);
  if (nextBtn) {
    nextBtn.focus();
    switchDay(nextDayKey);
  }
}

/* ==========================================================================
   WEEKLY & MONTHLY ARCHIVE SYSTEM & DAY FINALIZATION
   ========================================================================== */

function isDayFinalized(dayKey) {
  return getLocalStorageValue(`day_finalized_${dayKey}`) === "true";
}

function finalizeDay(dayKey) {
  // Set finalized status in LocalStorage
  setLocalStorageValue(`day_finalized_${dayKey}`, "true");

  // Compile day data and save to active week draft
  saveDayDataToDraft(dayKey);

  // Re-render
  renderActiveDayContent();
  syncNavCompletedDot(dayKey);
}

function modifyDay(dayKey) {
  // Remove finalized status
  localStorage.removeItem(`day_finalized_${dayKey}`);

  // Re-render
  renderActiveDayContent();
  syncNavCompletedDot(dayKey);
}

function saveDayDataToDraft(dayKey) {
  const dayData = daysData[dayKey];
  if (!dayData) return;

  const dayLog = {
    name: dayData.name,
    routineType: dayData.routineType,
    title: dayData.title,
    isRest: dayData.isRest,
    noWorkout: false,
    exercises: [],
    supplements: []
  };

  if (dayData.isRest) {
    dayLog.noWorkout = true;
  } else {
    let completedSetsCount = 0;

    dayData.exercises.forEach((ex) => {
      const exLog = {
        name: ex.name,
        sets: ex.sets,
        repsRule: ex.reps,
        setsDone: []
      };

      for (let s = 0; s < ex.sets; s++) {
        const checkboxId = `chk-${dayKey}-${ex.id}-${s}`;
        const inputId = `rep-${dayKey}-${ex.id}-${s}`;
        const isChecked = getLocalStorageValue(checkboxId) === "true";
        const loggedReps = getLocalStorageValue(inputId) || "";

        if (isChecked) {
          completedSetsCount++;
        }

        exLog.setsDone.push({
          setNum: s + 1,
          completed: isChecked,
          reps: loggedReps
        });
      }

      dayLog.exercises.push(exLog);
    });

    if (completedSetsCount === 0) {
      dayLog.noWorkout = true;
    }
  }

  // Supplements
  dayData.supplements.forEach((supp, index) => {
    const suppId = `supp-${dayKey}-${index}`;
    const isChecked = getLocalStorageValue(suppId) === "true";
    dayLog.supplements.push({
      name: supp,
      completed: isChecked
    });
  });

  // Save to active week draft
  let draft = {};
  try {
    const stored = getLocalStorageValue("routine_active_week_draft");
    if (stored) {
      draft = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error reading routine_active_week_draft", e);
  }

  draft[dayKey] = dayLog;
  setLocalStorageValue("routine_active_week_draft", JSON.stringify(draft));
}

function archiveActiveWeek() {
  if (!confirm("¿Estás seguro de que deseas archivar la semana actual? Esto guardará todo tu progreso en el historial y reiniciará el diario en blanco para una nueva semana.")) {
    return;
  }

  // Build the complete week from draft and fill in missing days
  let draft = {};
  try {
    const stored = getLocalStorageValue("routine_active_week_draft");
    if (stored) {
      draft = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error reading routine_active_week_draft", e);
  }

  const weekId = "week_" + Date.now();
  const weekData = {
    id: weekId,
    timestamp: Date.now(),
    dateRange: getActiveWeekDateRange(),
    days: {}
  };

  for (const dayKey of daysOrder) {
    // If the day is in the draft (finalized), use it
    if (draft[dayKey]) {
      weekData.days[dayKey] = draft[dayKey];
    } else {
      // If not finalized, compile it now (it will naturally mark 0 sets checked as noWorkout = true)
      saveDayDataToDraft(dayKey);
      // Reload draft and retrieve
      try {
        const updatedDraft = JSON.parse(getLocalStorageValue("routine_active_week_draft"));
        weekData.days[dayKey] = updatedDraft[dayKey];
      } catch (e) {
        console.error("Error reading updated draft for " + dayKey, e);
      }
    }
  }

  // Save to routine_history_weeks
  let historyWeeks = [];
  try {
    const stored = getLocalStorageValue("routine_history_weeks");
    if (stored) {
      historyWeeks = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error reading routine_history_weeks", e);
  }

  historyWeeks.push(weekData);

  // Check if we reached 4 weeks
  if (historyWeeks.length >= 4) {
    // Compile into Month
    let historyMonths = [];
    try {
      const storedMonths = getLocalStorageValue("routine_history_months");
      if (storedMonths) {
        historyMonths = JSON.parse(storedMonths);
      }
    } catch (e) {
      console.error("Error reading routine_history_months", e);
    }

    const monthNameString = new Date(weekData.timestamp).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    const formattedMonthName = "Mes de " + monthNameString.charAt(0).toUpperCase() + monthNameString.slice(1);

    const newMonth = {
      id: "month_" + Date.now(),
      monthName: formattedMonthName,
      timestamp: Date.now(),
      weeks: historyWeeks.slice(0, 4)
    };
    historyMonths.push(newMonth);

    // Save Months
    setLocalStorageValue("routine_history_months", JSON.stringify(historyMonths));

    // Slice historyWeeks to keep the remainder
    historyWeeks = historyWeeks.slice(4);
  }

  // Save Weeks
  setLocalStorageValue("routine_history_weeks", JSON.stringify(historyWeeks));

  // Reset current tracking variables in LocalStorage
  clearCurrentWeekLocalStorage();
  localStorage.removeItem("routine_active_week_draft");
  daysOrder.forEach(dayKey => {
    localStorage.removeItem(`day_finalized_${dayKey}`);
  });

  // Redirect or reload
  alert("Semana archivada con éxito.");
  window.location.reload();
}

function getActiveWeekDateRange() {
  const today = new Date();
  const day = today.getDay();
  // Adjust so Monday is 0, Sunday is 6
  const diff = today.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(today.setDate(diff));
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const monDay = monday.getDate();
  const monMonth = monday.toLocaleDateString('es-ES', { month: 'long' });
  const sunDay = sunday.getDate();
  const sunMonth = sunday.toLocaleDateString('es-ES', { month: 'long' });
  const year = sunday.getFullYear();

  const capMonMonth = monMonth.charAt(0).toUpperCase() + monMonth.slice(1);
  const capSunMonth = sunMonth.charAt(0).toUpperCase() + sunMonth.slice(1);

  if (monMonth === sunMonth) {
    return `${monDay} - ${sunDay} de ${capSunMonth} de ${year}`;
  } else {
    return `${monDay} de ${capMonMonth} - ${sunDay} de ${capSunMonth} de ${year}`;
  }
}

function clearCurrentWeekLocalStorage() {
  daysOrder.forEach((dayKey) => {
    const day = daysData[dayKey];
    if (!day.isRest) {
      day.exercises.forEach((ex) => {
        for (let s = 0; s < ex.sets; s++) {
          localStorage.removeItem(`chk-${dayKey}-${ex.id}-${s}`);
          localStorage.removeItem(`rep-${dayKey}-${ex.id}-${s}`);
        }
      });
    }
    day.supplements.forEach((supp, index) => {
      localStorage.removeItem(`supp-${dayKey}-${index}`);
    });
  });
}

// Expose functions globally
window.archiveActiveWeek = archiveActiveWeek;
window.finalizeDay = finalizeDay;
window.modifyDay = modifyDay;
window.isDayFinalized = isDayFinalized;


