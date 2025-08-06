const preguntas = [
  {
    "pregunta": "Si tuviera que elegir entre tres actividades, elegiría:",
    "opciones": ["Diseño y dibujo", "Ventas y negocio", "Apoyar a los bomberos"],
    "correcta": 2
  },
  {
    "pregunta": "No me gusta hacer las cosas razonando demasiado sobre ellas.",
    "opciones": ["No me gusta", "No, me gusta", "A veces me gusta"],
    "correcta": 1
  },
  {
    "pregunta": "Siempre he estado completamente de acuerdo con los demás.",
    "opciones": ["Siempre", "Nunca", "En ocasiones"],
    "correcta": 1
  },
  {
    "pregunta": "¿Te consideras una persona animada y vital?",
    "opciones": ["De vez en cuando", "Frecuentemente", "Poco frecuente"],
    "correcta": 1
  },
  {
    "pregunta": "Necesito ocupar un puesto en el que no tenga que obedecer órdenes.",
    "opciones": ["Sí", "No", "De vez en cuando"],
    "correcta": 1
  },
  {
    "pregunta": "Soy más bien susceptible.",
    "opciones": ["Casi siempre", "Algunas veces", "Casi nunca"],
    "correcta": 2
  },
  {
    "pregunta": "Generalmente tiendo a imponerme a las otras personas, más que ser complaciente con ellas.",
    "opciones": ["Nunca", "Casi siempre", "Casi nunca"],
    "correcta": 2
  },
  {
    "pregunta": "No me gustan las actividades que exigen empeñarse y esforzarse hasta el agotamiento.",
    "opciones": ["Falso", "En ocasiones", "Verdadero"],
    "correcta": 0
  },
  {
    "pregunta": "Por su temperamento usted se implica en más discusiones y altercados.",
    "opciones": ["En rarísimas ocasiones", "No siempre", "Sí, siempre"],
    "correcta": 0
  },
  {
    "pregunta": "Tiendo a involucrarme demasiado cuando alguien me cuenta sus problemas.",
    "opciones": ["Sí me sucede", "Algunas veces", "No me sucede"],
    "correcta": 0
  },
  {
    "pregunta": "No es necesario comportarse cordialmente con todas las personas.",
    "opciones": ["Totalmente en desacuerdo", "Totalmente de acuerdo", "A veces"],
    "correcta": 0
  },
  {
    "pregunta": "Noto fácilmente cuando las personas necesitan mi ayuda.",
    "opciones": ["En ocasiones", "Poco frecuente", "Muy frecuentemente"],
    "correcta": 2
  },
  {
    "pregunta": "La solidaridad social no constituye una acción positiva a los problemas de los demás.",
    "opciones": ["En desacuerdo", "En ocasiones", "De acuerdo"],
    "correcta": 0
  },
  {
    "pregunta": "El frío, el calor intenso y las incomodidades son tolerables en ocasiones, sin embargo las evito.",
    "opciones": ["Sí", "No", "A veces"],
    "correcta": 2
  },
  {
    "pregunta": "Alguna vez le juego una mala pasada a otros.",
    "opciones": ["Sí, algunos se la merecen", "Algunas veces lo hago", "Casi nunca lo hago"],
    "correcta": 2
  },
  {
    "pregunta": "Ante los obstáculos grandes, no conviene empeñarse en conseguir los objetivos propios.",
    "opciones": ["No, no conviene", "Sí, conviene", "A veces conviene"],
    "correcta": 1
  },
  {
    "pregunta": "La honradez, la honestidad, la justicia y la solidaridad son solo teoría.",
    "opciones": ["Verdadero", "Falso", "A veces"],
    "correcta": 1
  },
  {
    "pregunta": "Me alivia mucho conseguir con rapidez algo que necesite hacer irresistiblemente.",
    "opciones": ["Sí", "No", "A veces"],
    "correcta": 0
  },
  {
    "pregunta": "Busco el riesgo y lo desconocido, es una forma de sentir la vida con intensidad.",
    "opciones": ["De acuerdo", "En desacuerdo", "Depende"],
    "correcta": 1
  },
  {
    "pregunta": "No me gustan los ambientes de trabajo en las que hay mucha competitividad.",
    "opciones": ["Totalmente de acuerdo", "Falso", "Verdadero"],
    "correcta": 2
  },
  {
    "pregunta": "Nunca he dicho una mentira.",
    "opciones": ["Verdadero", "En ocasiones", "Falso"],
    "correcta": 2
  },
  {
    "pregunta": "Llevo adelante las tareas emprendidas aunque los resultados iniciales parezcan negativos.",
    "opciones": ["Algunas veces", "Nunca", "Siempre"],
    "correcta": 2
  },
  {
    "pregunta": "Si no puedo hacer algo bien, no tiene sentido intentarlo otra vez.",
    "opciones": ["Totalmente de acuerdo", "En desacuerdo", "En ocasiones"],
    "correcta": 1
  },
  {
    "pregunta": "Aprendo a vivir con el problema si no se puede solucionar.",
    "opciones": ["Falso", "Verdadero", "En ocasiones"],
    "correcta": 1
  },
  {
    "pregunta": "¿Te consideras una persona animada y vital?",
    "opciones": ["No", "Casi siempre", "Casi nunca"],
    "correcta": 1
  },
  {
    "pregunta": "A menudo me siento realmente fracasado.",
    "opciones": ["No me sucede", "En ocasiones", "Sí me sucede"],
    "correcta": 0
  },
  {
    "pregunta": "Por su temperamento usted se implica en más discusiones y altercados.",
    "opciones": ["En rarísimas ocasiones", "No siempre", "Sí, siempre"],
    "correcta": 0
  },
  {
    "pregunta": "Si volviera a vivir, haría muchas cosas de manera distinta a como las he hecho.",
    "opciones": ["No lo sé", "Verdadero", "Falso"],
    "correcta": 2
  },
  {
    "pregunta": "Normalmente tiendo a no fiarme mucho de mi prójimo.",
    "opciones": ["Verdadero", "Falso", "En ocasiones"],
    "correcta": 1
  },
  {
    "pregunta": "Si tuviera que elegir entre tres actividades, elegiría:",
    "opciones": ["Diseño y dibujo", "Ventas y negocio", "Apoyar a los bomberos"],
    "correcta": 2
  },
  {
    "pregunta": "La solidaridad social no constituye una acción positiva a los problemas de los demás.",
    "opciones": ["Verdadero", "No lo sé", "Falso"],
    "correcta": 2
  },
  {
    "pregunta": "Muchas veces me digo a mí mismo(a): 'Qué tonto he sido' después de haber hecho o prometido algo.",
    "opciones": ["En ocasiones", "Casi nunca", "Casi siempre"],
    "correcta": 1
  },
  {
    "pregunta": "Busco el riesgo y lo desconocido, es una forma de sentir la vida con intensidad.",
    "opciones": ["Totalmente de acuerdo", "En desacuerdo", "En ocasiones"],
    "correcta": 1
  },
  {
    "pregunta": "¿Consideras que tus amigos y tu vida social son muy importantes en tu vida?",
    "opciones": ["En desacuerdo", "Solo mi familia es importante para mí", "Claro entre otras cosas más"],
    "correcta": 2
  },
  {
    "pregunta": "¿Alguna vez has experimentado una pérdida por hacer lo correcto?",
    "opciones": ["No, siempre hago lo correcto", "Sí, a partir de ahí cambié mi actitud", "Sí, a todos nos sucede en algún momento"],
    "correcta": 2
  },
  {
    "pregunta": "Tengo problemas en casa porque mis padres son demasiados exigentes con los horarios.",
    "opciones": ["Casi siempre", "Casi nunca", "A veces"],
    "correcta": 2
  },
  {
    "pregunta": "Cuando cometo algún error, no puedo arrepentirme.",
    "opciones": ["Verdadero", "Falso", "Nadie se arrepiente"],
    "correcta": 1
  },
  {
    "pregunta": "En mi vida todo aquello que planifiqué queda solo en proyectos.",
    "opciones": ["A veces", "No me ocurre", "Sí, me ocurre"],
    "correcta": 1
  },
  {
    "pregunta": "Intento no herir los sentimientos de los demás.",
    "opciones": ["Totalmente de acuerdo", "No lo sé", "Totalmente en desacuerdo"],
    "correcta": 0
  },
  {
    "pregunta": "Si alguna acción mía puede llegar a desagradar a alguien, seguramente dejo de hacerla.",
    "opciones": ["A veces", "Sí", "No"],
    "correcta": 1
  },
  {
    "pregunta": "Me gusta sentir la adrenalina hasta el límite, esa sensación solo es de valientes.",
    "opciones": ["De acuerdo", "En desacuerdo", "En ocasiones"],
    "correcta": 1
  },
  {
    "pregunta": "Ayudar a los que necesitan y quedar en el anonimato es:",
    "opciones": ["Una acción de verdadera sensibilidad y nobleza", "Una acción muy romántica, es regalar tu esfuerzo", "Una acción noble pero se debe dar a conocer"],
    "correcta": 0
  }
];

let tiempo = 600;
let puntaje = 0;
let actual = 0;
let seleccionadas = [];

function iniciarSimulacro() {
  seleccionadas = preguntas; // Mostrar todas las preguntas sin limitar a 10
  mostrarPregunta();
  iniciarTemporizador();
}

function mostrarPregunta() {
  const p = seleccionadas[actual];
  document.getElementById("pregunta").textContent = `Pregunta ${actual + 1}: ${p.pregunta}`;
  const opciones = document.getElementById("opciones");
  opciones.innerHTML = "";
  p.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => validarRespuesta(btn, i);
    opciones.appendChild(btn);
  });
  actualizarProgreso();
}

function validarRespuesta(btn, i) {
  const correcta = seleccionadas[actual].correcta;
  const botones = document.querySelectorAll("#opciones button");
  // Deshabilitar todos los botones para evitar cambiar respuesta
  botones.forEach(b => b.disabled = true);
  btn.classList.add("seleccionado");
  if (i === correcta) {
    puntaje++;
    btn.classList.add("correcto");
  } else {
    btn.classList.add("incorrecto");
    botones[correcta].classList.add("correcto");
  }
}

document.getElementById("siguiente").onclick = () => {
  if (actual < seleccionadas.length - 1) {
    actual++;
    mostrarPregunta();
  } else {
    terminarSimulacro();
  }
};

document.getElementById("reiniciar").onclick = () => location.reload();

function terminarSimulacro() {
  document.getElementById("pregunta").classList.add("oculto");
  document.getElementById("opciones").classList.add("oculto");
  document.getElementById("siguiente").classList.add("oculto");
  const r = document.getElementById("resultado");
  r.classList.remove("oculto");
  r.innerHTML = `
    <div class="resultado-final-container">
      <h2>Resultado final: ${puntaje} de 20</h2>
    </div>
  `;
  document.getElementById("reiniciar").classList.remove("oculto");
}

function actualizarProgreso() {
  const porcentaje = ((actual + 1) / seleccionadas.length) * 100;
  document.getElementById("progreso").style.setProperty("--width", `${porcentaje}%`);
  document.querySelector("#progreso::after")?.style.setProperty("width", `${porcentaje}%`);
}

function iniciarTemporizador() {
  const timer = document.getElementById("timer");
  const intervalo = setInterval(() => {
    if (tiempo <= 0) {
      clearInterval(intervalo);
      terminarSimulacro();
    }
    const minutos = Math.floor(tiempo / 60).toString().padStart(2, '0');
    const segundos = (tiempo % 60).toString().padStart(2, '0');
    timer.textContent = `${minutos}:${segundos}`;
    tiempo--;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarSimulacro);
