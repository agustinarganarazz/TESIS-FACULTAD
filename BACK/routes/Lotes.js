const { Router } = require("express");
const router = Router();

const { registrarLote } = require("../controllers/lotes");

router.post("/registarLote", registrarLote);

module.exports = router;
