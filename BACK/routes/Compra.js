const express = require("express");
const router = express.Router();

const { registrarCompraYLote } = require("../controllers/compra");

router.post("/registrarCompra", registrarCompraYLote);

module.exports = router;
