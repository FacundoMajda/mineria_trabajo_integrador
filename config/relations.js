import PreguntaModel from "../models/pregunta.js";
import RespuestaModel from "../models/respuesta.js";
import GeneroModel from "../models/genero.js";
import EncuestaModel from "../models/encuesta.js";
import LocalidadModel from "../models/localidad.js";
import MateriaModel from "../models/materia.js";
import NivelModel from "../models/nivel.js";
import { Logger } from "../loaders/logger.js";
import PRModel from "../models/intermedias/Pregunta_has_Respuesta.js";
import EPRModel from "../models/intermedias/Encuesta_has_Pregunta_has_Respuesta.js";

export const Relations = () => {
  try {
    EncuestaModel.belongsToMany(PRModel, {
      through: EPRModel,
      foreignKey: "id_encuesta",
    });
    PRModel.belongsToMany(EncuestaModel, {
      through: EPRModel,
      foreignKey: "id_PreguntaRespuesta",
    });

    PreguntaModel.belongsToMany(RespuestaModel, {
      through: PRModel,
      foreignKey: "id_pregunta",
    });
    RespuestaModel.belongsToMany(PreguntaModel, {
      through: PRModel,
      foreignKey: "id_respuesta",
    });

    PRModel.belongsTo(MateriaModel, {
      foreignKey: "id_materia",
    });

    GeneroModel.hasMany(EncuestaModel, { foreignKey: "id_genero" });
    EncuestaModel.belongsTo(GeneroModel, { foreignKey: "id_genero" });

    LocalidadModel.hasMany(EncuestaModel, { foreignKey: "id_localidad" });
    EncuestaModel.belongsTo(LocalidadModel, { foreignKey: "id_localidad" });

    MateriaModel.hasMany(PreguntaModel, { foreignKey: "id_materia" });
    PreguntaModel.belongsTo(MateriaModel, { foreignKey: "id_materia" });

    NivelModel.hasMany(EncuestaModel, { foreignKey: "id_nivel" });
    EncuestaModel.belongsTo(NivelModel, { foreignKey: "id_nivel" });

    Logger.info("❤️‍🔥 Relaciones establecidas con éxito");
  } catch (error) {
    Logger.error(`❌ Error al establecer relaciones: ${error.message}`);
  }
};
