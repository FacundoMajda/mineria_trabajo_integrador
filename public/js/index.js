const cargarOpciones = async (url, selectId, valueField, textField) => {
  const select = document.getElementById(selectId);

  if (!select) {
    console.error(`Element with ID ${selectId} not found.`);
    return;
  }

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      select.innerHTML = "";

      const defaultOption = new Option("Selecciona una opción", "");
      select.appendChild(defaultOption);

      data.forEach((option) => {
        const optionElement = new Option(option[textField], option[valueField]);
        select.appendChild(optionElement);
      });
    } else {
      console.error(
        `Error al obtener opciones: ${response.status} - ${response.statusText}`
      );
      alert("Error al cargar las opciones. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    console.error("Ocurrió un error inesperado:", error);
    alert("Ocurrió un error inesperado. Por favor, inténtalo de nuevo.");
  }
};

cargarOpciones("/api/generos", "genero", "id_genero", "descripcion");
cargarOpciones("/api/localidades", "localidad", "id_localidad", "nombre");
cargarOpciones("/api/niveles", "nivel", "id_nivel", "descripcion");

for (let i = 1; i <= 11; i++) {
  const selectId = `materia-pregunta-${i}`;
  cargarOpciones("/api/materias", selectId, "id_materia", "descripcion");
}

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const encuestaData = {
    edad: document.getElementById("edad").value,
    id_genero: document.getElementById("genero").value,
    id_localidad: document.getElementById("localidad").value,
    id_nivel: document.getElementById("nivel").value,

    respuesta1: document.getElementById("materia-pregunta-1").value,

    respuesta2: document.getElementById("materia-pregunta-2").value,

    respuesta3: document.getElementById("materia-pregunta-3").value,

    respuesta4: document.getElementById("materia-pregunta-4").value,

    respuesta5: document.getElementById("materia-pregunta-5").value,

    respuesta6: document.getElementById("materia-pregunta-6").value,

    respuesta7: document.getElementById("materia-pregunta-7").value,

    respuesta8: document.getElementById("materia-pregunta-8").value,

    respuesta9: document.getElementById("materia-pregunta-9").value,

    respuesta10: document.getElementById("materia-pregunta-10").value,

    respuesta11: document.getElementById("materia-pregunta-11").value,
  };

  for (let i = 1; i <= 11; i++) {
    encuestaData[`respuesta${i}`] = document.getElementById(
      `materia-pregunta-${i}`
    ).value;
  }

  try {
    const response = await fetch("/api/guardar-encuesta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encuestaData),
    });

    if (response.ok) {
      alert("Encuesta guardada exitosamente");
    } else {
      console.error(
        `Error al guardar la encuesta: ${response.status} - ${response.statusText}`
      );
      alert(
        "Ocurrió un error al guardar la encuesta. Por favor, inténtalo de nuevo."
      );
    }
  } catch (error) {
    console.error("Ocurrió un error inesperado al guardar la encuesta:", error);
    alert(
      "Ocurrió un error inesperado al guardar la encuesta. Por favor, inténtalo de nuevo."
    );
  }
});
