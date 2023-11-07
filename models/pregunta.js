import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const PreguntaModel = sequelize.define("Pregunta", {
  id_pregunta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default PreguntaModel;
