import { Router } from "express";
import {
  getEncuestas,
  getGeneros,
  getLocalidades,
  getMaterias,
  getNiveles,
} from "../controllers/options.js";

import { guardarEncuesta } from "../controllers/encuesta.controller.js";
const router = Router();

router.post("/guardar-encuesta", guardarEncuesta);
router.get("/encuestas", getEncuestas);
router.get("/materias", getMaterias);

router.get("/generos", getGeneros);
router.get("/localidades", getLocalidades);
router.get("/niveles", getNiveles);

export default router;
