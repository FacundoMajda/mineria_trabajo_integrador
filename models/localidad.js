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

const localidades = [
  { descripcion: "Clorinda" },
  { descripcion: "Formosa" },
  { descripcion: "El Colorado" },
  { descripcion: "Estanislao del Campo" },
  { descripcion: "Ibarreta" },
  { descripcion: "Ingeniero Juárez (Ingeniero Guillermo Nicasio Juárez)" },
  { descripcion: "Laguna Blanca" },
  { descripcion: "Las Lomitas" },
  { descripcion: "Pirané" },
  { descripcion: "Comandante Fontana" },
  { descripcion: "El Chorro (General Enrique Mosconi)" },
  { descripcion: "El Espinillo" },
  {
    descripcion: "General Lucio V. Mansilla",
  },
  { descripcion: "General Manuel Belgrano" },
  { descripcion: "Herradura" },
  { descripcion: "Laguna Naineck (Laguna Naick Neck)" },
  { descripcion: "Laguna Yema" },
  { descripcion: "Mayor Vicente Villafañe (Mayor Villafañe)" },
  { descripcion: "Misión San Francisco de Laishí" },
  { descripcion: "Misión Tacaaglé" },
  { descripcion: "Palo Santo" },
  { descripcion: "Pozo del Tigre" },
  { descripcion: "Riacho He-Hé" },
  { descripcion: "San Martín 2" },
  { descripcion: "Villa Dos Trece" },
  { descripcion: "Villa Escolar" },
  { descripcion: "Villa General Güemes" },
  { descripcion: "Buena Vista" },
  { descripcion: "Colonia Pastoril" },
  { descripcion: "Fortín Lugones" },
  { descripcion: "Gran Guardia" },
  { descripcion: "Los Chiriguanos" },
  { descripcion: "Pozo de Maza" },
  { descripcion: "San Hilario" },
  { descripcion: "Siete Palmas" },
  { descripcion: "Subteniente Perín" },
  { descripcion: "Tres Lagunas" },
];

LocalidadesModel.bulkCreate(localidades)
  .then(() => {
    console.log("Las localidades se han cargado correctamente");
  })
  .catch((error) => {
    console.error("Error al cargar los niveles: ", error);
  });

export default LocalidadesModel;
