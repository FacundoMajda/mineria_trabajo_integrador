import EncuestaModel from "../models/encuesta.js";
import GeneroModel from "../models/genero.js";
import LocalidadesModel from "../models/localidad.js";
import NivelModel from "../models/nivel.js";

export const getGeneros = async (req, res) => {
  try {
    const generos = await GeneroModel.findAll();
    res.json(generos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las opciones de género" });
  }
};

export const getLocalidades = async (req, res) => {
  try {
    const localidades = await LocalidadesModel.findAll();
    res.json(localidades);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las opciones de localidad" });
  }
};

export const getNiveles = async (req, res) => {
  try {
    const niveles = await NivelModel.findAll();
    res.json(niveles);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las opciones de nivel educativo" });
  }
};
