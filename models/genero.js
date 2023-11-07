import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const GeneroModel = sequelize.define("Genero", {
  id_genero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default GeneroModel;
