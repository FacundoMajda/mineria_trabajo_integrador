import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const MateriaModel = sequelize.define("Materia", {
  id_materia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// const materias = [
//   { descripcion: "TALLER DE LENGUAJE DE PROGRAMACION" },
//   { descripcion: "ARQUITECTURA Y SISTEMAS OPERATIVOS" },
//   { descripcion: "ALGORITMOS Y ESTRUCTURAS DE DATOS" },
//   { descripcion: "BASE DE DATOS I" },
//   { descripcion: "TALLER DE INTEGRACION I" },
//   { descripcion: "MATEMATICA APLICADA I" },
//   { descripcion: "INGLES I" },
//   { descripcion: "MATEMATICA APLICADA II" },
//   { descripcion: "INGLES II" },
//   { descripcion: "BASE DE DATOS II" },
//   { descripcion: "INGENIERIA DE SOFTWARE" },
//   { descripcion: "TALLER DE INTEGRACION II" },
//   { descripcion: "ORIENTACION Y VALORES" },
//   { descripcion: "MINERIA DE DATOS" },
// ];

// MateriaModel.bulkCreate(materias)
//   .then(() => {
//     console.log("Las se han cargado correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al cargar los niveles: ", error);
//   });

export default MateriaModel;
