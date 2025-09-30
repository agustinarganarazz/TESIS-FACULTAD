const { Router } = require("express");
const router = Router();

const {
  verMontoTotalComprado,
  verPromedioGasto,
  verTopProductosComprados,
  verTotalDrogueria,
} = require("../controllers/reportes");

router.get("/verTotalDrogueria", verTotalDrogueria);
router.get("/verTopProductosComprados", verTopProductosComprados);
router.get("/verPromedioGasto", verPromedioGasto);
router.get("/verMontoTotalComprado", verMontoTotalComprado);

module.exports = router;
