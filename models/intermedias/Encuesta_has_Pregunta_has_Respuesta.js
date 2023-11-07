import { sequelize } from "../../config/db.js";
import { DataTypes } from "sequelize";

//ENCUESTA -> tiene PREGUNTA -> tiene RESPUESTA
const EPRModel = sequelize.define("EPreguntaRespuesta", {
  id_EPR: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_encuesta: {
    type: DataTypes.INTEGER,
  },
  id_PreguntaRespuesta: {
    type: DataTypes.INTEGER,
  },
});

export default EPRModel;
