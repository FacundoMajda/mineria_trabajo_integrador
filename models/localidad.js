import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
const LocalidadesModel = sequelize.define("Localidades", {
  id_localidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default LocalidadesModel;
