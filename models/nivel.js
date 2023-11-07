import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

 const NivelModel = sequelize.define("Nivel", {
  id_nivel: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
export default NivelModel