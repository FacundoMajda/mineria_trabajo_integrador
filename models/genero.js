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

const generos = [
  { descripcion: "Masculino" },
  { descripcion: "Femenino" },
  { descripcion: "No Binario" },
  { descripcion: "Prefiero no decirlo" },
];

GeneroModel.bulkCreate(generos)
  .then(() => {
    console.log("Los generos se han cargado correctamente");
  })
  .catch((error) => {
    console.error("Error al cargar los niveles: ", error);
  });
export default GeneroModel;
