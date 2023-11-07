import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const EncuestaModel = sequelize.define("Encuesta", {
  id_encuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_localidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_genero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_nivel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default EncuestaModel;
