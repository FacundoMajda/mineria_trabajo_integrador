import { sequelize } from "../../config/db.js";
import { DataTypes } from "sequelize";

//PREGUNTA -> tiene RESPUESTA

const PRModel = sequelize.define("PreguntaRespuesta", {
  id_PR: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pregunta: {
    type: DataTypes.INTEGER,
  },
  id_respuesta: {
    type: DataTypes.INTEGER,
  },
  id_materia: {
    type: DataTypes.INTEGER,
  },
});

export default PRModel;
