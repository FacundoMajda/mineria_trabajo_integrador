import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const RespuestaModel = sequelize.define("Respuesta", {
  id_respuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default RespuestaModel;
