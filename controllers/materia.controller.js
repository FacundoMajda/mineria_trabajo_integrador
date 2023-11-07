import { EncuestaModel } from "../encuestaModels/encuesta.js";

class EncuestaController {
  static async crearEncuesta(req, res) {
    try {
      const encuesta = await EncuestaModel.create(req.body);
      return res.status(201).json(encuesta);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async obtenerEncuestas(req, res) {
    try {
      const encuestas = await EncuestaModel.findAll();
      return res.status(200).json(encuestas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async obtenerEncuesta(req, res) {
    try {
      const { id } = req.params;
      const encuesta = await EncuestaModel.findOne({
        where: { id: id },
      });
      if (encuesta) {
        return res.status(200).json(encuesta);
      }
      return res.status(404).json({ message: "Encuesta no encontrada" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async actualizarEncuesta(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await EncuestaModel.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const updatedEncuesta = await EncuestaModel.findOne({
          where: { id: id },
        });
        return res.status(200).json(updatedEncuesta);
      }
      throw new Error("Encuesta no encontrada");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async eliminarEncuesta(req, res) {
    try {
      const { id } = req.params;
      const deleted = await EncuestaModel.destroy({
        where: { id: id },
      });
      if (deleted) {
        return res.status(204).json({ message: "Encuesta eliminada" });
      }
      throw new Error("Encuesta no encontrada");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default EncuestaController;
