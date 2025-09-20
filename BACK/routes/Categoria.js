const { Router } = require("express");
const router = Router();

const { verCategoria, crearCategoria, editarCategoria, eliminarCategoria }=require('../controllers/categoria')

router.get('/verCategoria/',verCategoria)
router.post('/crearCategoria/',crearCategoria)
router.put('/editarCategoria/:Id_categoria',editarCategoria)
router.put('/eliminarCategoria/',eliminarCategoria)

module.exports= router
