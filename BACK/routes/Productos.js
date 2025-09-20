const { Router } = require("express");
const router = Router();

const {
  verProductos,
  editarProducto,
  eliminarProducto,
  crearProducto,
} = require("../controllers/productos");

router.get("/verProductos", verProductos);
router.post("/crearProducto/", crearProducto);
router.put("/editarProducto/:Id_producto", editarProducto);
router.put("/eliminarProducto/:Id_producto", eliminarProducto);

module.exports = router;
