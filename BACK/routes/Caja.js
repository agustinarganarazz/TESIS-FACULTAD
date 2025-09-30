const { Router } = require("express");
const router = Router();

const {
  registrarAperturaCaja,
  registrarCierreCaja,
  totalVentasDia,
} = require("../controllers/caja");

router.get("/totalVentasDia/:idApertura", totalVentasDia);
router.post("/registrarAperturaCaja", registrarAperturaCaja);
router.post("/registrarCierreCaja", registrarCierreCaja);

module.exports = router;
