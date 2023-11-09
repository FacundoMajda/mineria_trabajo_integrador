import express from "express";
import {
  getGeneros,
  getLocalidades,
  getNiveles,
} from "../controllers/options.js";

import { guardarEncuesta } from "../controllers/encuesta.controller.js";
const router = express.Router();

router.post("/guardar-encuesta", guardarEncuesta);

router.get("/generos", getGeneros);
router.get("/localidades", getLocalidades);
router.get("/niveles", getNiveles);

export default router;
