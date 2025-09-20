const { Router } = require("express");
const router = Router();

const {
  verDroguerias,
  crearDrogueria,
  editarDrogueria,
  eliminarDrogueria,
} = require("../controllers/droguerias");

router.get("/verDroguerias", verDroguerias);
router.post("/crearDroguerias", crearDrogueria);
router.put("/editarDrogueria/:Id_drogueria", editarDrogueria);
router.put("/eliminarDrogueria/:Id_drogueria", eliminarDrogueria);

module.exports = router;
