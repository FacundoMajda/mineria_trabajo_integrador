import { Logger } from "../loaders/logger.js";
import EncuestaModel from "../models/encuesta.js";

export const guardarEncuesta = async (req, res) => {
  try {
    const {
      edad,
      id_genero,
      id_localidad,
      id_nivel,
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11,
      // respuesta12,
      // respuesta13,
    } = req.body;

    const nuevaEncuesta = await EncuestaModel.create({
      edad,
      id_genero,
      id_localidad,
      id_nivel,
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11,
    });
    Logger.info("Encuesta Creada");
    res.json({ message: "Encuesta guardada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar la encuesta" });
  }
};
