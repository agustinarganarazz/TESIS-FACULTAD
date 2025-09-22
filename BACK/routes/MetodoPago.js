const { Router } = require("express");
const router = Router();

const {
  verMetodoPago,
  crearMetodoPago,
  editarMetodoPago,
  eliminarMetodopago,
} = require("../controllers/metodoPago.js");

router.get("/verMetodoPago", verMetodoPago);
router.post("/crearMetodoPago", crearMetodoPago);
router.put("/editarMetodoPago/:Id_metodopago", editarMetodoPago);
router.put("/eliminarMetodoPago/:Id_metodopago", eliminarMetodopago);

module.exports = router;
