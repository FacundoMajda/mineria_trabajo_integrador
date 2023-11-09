import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const EncuestaModel = sequelize.define("Encuesta", {
  id_encuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  //Datos geograficos
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

  //asd
  respuesta1: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta2: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta3: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta4: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta5: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta6: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta7: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta8: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta9: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta10: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta11: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta12: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  respuesta13: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default EncuestaModel;
