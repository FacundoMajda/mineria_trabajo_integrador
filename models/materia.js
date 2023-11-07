import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const MateriaModel = sequelize.define("Materia", {
  id_materia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default MateriaModel;
