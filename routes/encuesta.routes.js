import { Router } from "express";
import EncuestaController from "../controllers/EncuestaController";

const router = Router();

router.post("/", EncuestaController.crearEncuesta);
router.get("/", EncuestaController.obtenerEncuestas);
router.get("/:id", EncuestaController.obtenerEncuesta);
router.put("/:id", EncuestaController.actualizarEncuesta);
router.delete("/:id", EncuestaController.eliminarEncuesta);

export default router;
