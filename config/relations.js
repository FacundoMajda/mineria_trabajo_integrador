// import PreguntaModel from "../models/pregunta.js";
// import RespuestaModel from "../models/respuesta.js";
// import MateriaModel from "../models/materia.js";
import GeneroModel from "../models/genero.js";
import LocalidadModel from "../models/localidad.js";
import NivelModel from "../models/nivel.js";
import EncuestaModel from "../models/encuesta.js";
import { Logger } from "../loaders/logger.js";
// import PRModel from "../models/intermedias/Pregunta_has_Respuesta.js";
// import EPRModel from "../models/intermedias/Encuesta_has_Pregunta_has_Respuesta.js";

export const Relations = () => {
  try {
    //1
    GeneroModel.hasMany(EncuestaModel, { foreignKey: "id_genero" });
    EncuestaModel.belongsTo(GeneroModel, { foreignKey: "id_genero" });
    //2
    NivelModel.hasMany(EncuestaModel, { foreignKey: "id_nivel" });
    EncuestaModel.belongsTo(NivelModel, { foreignKey: "id_nivel" });
    //3
    LocalidadModel.hasMany(EncuestaModel, { foreignKey: "id_localidad" });
    EncuestaModel.belongsTo(LocalidadModel, { foreignKey: "id_localidad" });

    Logger.info("❤️‍🔥 Relaciones establecidas con éxito");
  } catch (error) {
    Logger.error(`❌ Error al establecer relaciones: ${error.message}`);
  }
};
