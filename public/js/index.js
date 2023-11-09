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
    }
  } catch (error) {
    console.error(error);
  }
};

cargarOpciones("/api/generos", "genero", "id_genero", "descripcion");
cargarOpciones("/api/localidades", "localidad", "id_localidad", "nombre");
cargarOpciones("/api/niveles", "nivel", "id_nivel", "descripcion");

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const localidad = document.getElementById("localidad").value;
  const nivel = document.getElementById("nivel").value;
  const comentario = document.getElementById("comentario").value;

  if (!edad || !genero || !localidad || !nivel) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  const encuestaData = {
    edad,
    id_genero: genero,
    id_localidad: localidad,
    id_nivel: nivel,
    respuesta1: "",
    respuesta2: "",
    respuesta3: "",
    respuesta4: "",
    respuesta5: "",
    respuesta6: "",
    respuesta7: "",
    respuesta8: "",
    respuesta9: "",
    respuesta10: "",
    respuesta11: "",
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
