import EncuestaModel from "../models/encuesta.js";
import GeneroModel from "../models/genero.js";
import LocalidadesModel from "../models/localidad.js";
import MateriaModel from "../models/materia.js";
import NivelModel from "../models/nivel.js";

export const getEncuestas = async (req, res) => {
  try {
    const encuesta = await EncuestaModel.findAll();
    res.json(encuesta);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las opciones de Encuesta" });
  }
};

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

export const getMaterias = async (req, res) => {
  try {
    const materias = await MateriaModel.findAll();
    res.json(materias);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las opciones de materias" });
  }
};
