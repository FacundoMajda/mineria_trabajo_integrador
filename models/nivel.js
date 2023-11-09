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

// const niveles = [
//   { descripcion: "Secundaria completa" },
//   { descripcion: "Secundaria incompleta" },
//   { descripcion: "Terciario completo" },
//   { descripcion: "Terciario incompleto" },
//   { descripcion: "Universitario completo" },
//   { descripcion: "Universitario incompleto" },
// ];

// NivelModel.bulkCreate(niveles)
//   .then(() => {
//     console.log("Los niveles se han cargado correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al cargar los niveles: ", error);
//   });
export default NivelModel;
