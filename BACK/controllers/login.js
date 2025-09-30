const { connection } = require("../database/config");

const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const nombre_usuario = req.body.nombre_usuario;
  const clave = req.body.clave;

  connection.query(
    "SELECT * FROM usuarios WHERE nombre_usuario = ? AND clave = ?",
    [nombre_usuario, clave],
    (error, results) => {
      if (error) {
        console.log(`error al ejecutar consulta SQL`, error);
        return res.status(500).send("error interno del servidor");
      }
      if (results.length > 0) {
        const usuario = results[0];

        //crear el toker JWT
        const token = jwt.sign(
          {
            id: usuario.Id_usuario,
            nombre_usuario: usuario.nombre_usuario,
            rol: usuario.rol_usuario,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES_IN,
          }
        );
        res.json({
          success: true,
          token,
          usuario: {
            id: usuario.Id_usuario,
            nombre_usuario: usuario.nombre_usuario,
            rol: usuario.rol_usuario,
          },
        });
      } else {
        res.json({
          success: false,
          mensaje: "credenciales invalidas",
        });
      }
    }
  );
};

module.exports = { login };
