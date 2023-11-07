import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connectToDatabase } from "./config/db.js";
import { sync } from "./config/sync.js";
import { Logger } from "./loaders/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.APP_URL;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!❤️‍🔥🥵");
});

app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

app.listen(PORT, async () => {
  try {
    await connectToDatabase();
    await sync();
    Logger.info("🚀 Servidor escuchando en:");
    Logger.http(`${URL}${PORT}`);
  } catch (error) {
    Logger.error("❌ Error al conectar a la base de datos:", error);
  }
});
