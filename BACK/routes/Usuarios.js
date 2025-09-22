const { Router } = require("express");
const router = Router();
const {
  verUsuarios,
  verUsuariosBaja,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
  altaUsuario,
} = require("../controllers/Usuarios");

router.get("/verUsuarios", verUsuarios);
router.get("/verUsuariosBaja", verUsuariosBaja);
router.post("/crearUsuario", crearUsuario);
router.put("/editarUsuario/:Id_usuario", editarUsuario);
router.put("/eliminarUsuario", eliminarUsuario);
router.put("/altaUsuario/:Id_usuario", altaUsuario);

module.exports = router;
