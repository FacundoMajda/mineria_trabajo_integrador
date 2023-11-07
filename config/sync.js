// import { EncuestaModel } from "../models/encuesta.js";
// import { MateriaModel } from "../models/materia.js";
// import { RespuestaModel } from "../models/respuestajs";
// import { PreguntaModel } from "../models/pregunta.js";
// import { GeneroModel } from "../models/genero.js";
import { Relations } from "./relations.js";
import { sequelize } from "./db.js";
import { Logger } from "../loaders/logger.js";
export const sync = async () => {
  try {
    Relations();
    await sequelize.sync({ alter: true }); // Set force: true to drop existing tables
    Logger.info("✅ Todos los modelos han sido sincronizados");
  } catch (error) {
    Logger.error("❌ Ha ocurrido un error durante la sincronización:", error);
  }
};
