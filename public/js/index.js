const cargarOpciones = async (url, selectId, valueField, textField) => {
  const select = document.getElementById(selectId);

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      select.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Selecciona una opción";
      select.appendChild(defaultOption);

      data.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option[valueField];
        optionElement.textContent = option[textField];
        select.appendChild(optionElement);
      });
    } else {
      console.error("Error al obtener opciones");
      alert("Error al cargar las opciones. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    console.error(error);
    alert("Ocurrió un error inesperado. Por favor, inténtalo de nuevo.");
  }
};

cargarOpciones("/api/generos", "genero", "id_genero", "descripcion");
cargarOpciones("/api/localidades", "localidad", "id_localidad", "nombre");
cargarOpciones("/api/niveles", "nivel", "id_nivel", "descripcion");

cargarOpciones(
  "/api/materias",
  "materia-pregunta-1",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-2",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-3",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-4",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-5",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-6",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-7",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-8",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-9",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-10",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-11",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-12",
  "id_materia",
  "descripcion"
);
cargarOpciones(
  "/api/materias",
  "materia-pregunta-13",
  "id_materia",
  "descripcion"
);

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const localidad = document.getElementById("localidad").value;
  const nivel = document.getElementById("nivel").value;
  const comentario = document.getElementById("comentario").value;

  const respuesta1 = document.getElementById("materia-pregunta-1").value;
  const respuesta2 = document.getElementById("materia-pregunta-2").value;
  const respuesta3 = document.getElementById("materia-pregunta-3").value;
  const respuesta4 = document.getElementById("materia-pregunta-4").value;
  const respuesta5 = document.getElementById("materia-pregunta-5").value;
  const respuesta6 = document.getElementById("materia-pregunta-6").value;
  const respuesta7 = document.getElementById("materia-pregunta-7").value;
  const respuesta8 = document.getElementById("materia-pregunta-8").value;
  const respuesta9 = document.getElementById("materia-pregunta-9").value;
  const respuesta10 = document.getElementById("materia-pregunta-10").value;
  const respuesta11 = document.getElementById("materia-pregunta-11").value;
  const respuesta12 = document.getElementById("materia-pregunta-12").value;
  const respuesta13 = document.getElementById("materia-pregunta-13").value;

  //validaciones
  if (!edad || !genero || !localidad || !nivel) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  if (!edad || !/^\d+$/.test(edad) || parseInt(edad) < 0) {
    alert(
      "Por favor, ingresa una edad válida (número no negativo).       animal"
    );
    return;
  }

  const encuestaData = {
    edad: parseInt(edad),
    id_genero: genero,
    id_localidad: localidad,
    id_nivel: nivel,
    respuesta1: respuesta1,
    respuesta2: respuesta2,
    respuesta3: respuesta3,
    respuesta4: respuesta4,
    respuesta5: respuesta5,
    respuesta6: respuesta6,
    respuesta7: respuesta7,
    respuesta8: respuesta8,
    respuesta9: respuesta9,
    respuesta10: respuesta10,
    respuesta11: respuesta11,
    respuesta12: respuesta12,
    respuesta13: respuesta13,
  };

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
      console.error("Error al guardar la encuesta");
    }
  } catch (error) {
    console.error(error);
    alert(
      "Ocurrió un error al guardar la encuesta. Por favor, inténtalo de nuevo."
    );
  }
});
