const { connection } = require("../database/config");

const registrarAperturaCaja = (req, res) => {
  connection.query(
    "INSERT INTO aperturas_caja SET ?",
    {
      Id_usuario: req.body.Id_usuario,
      monto_inicial: req.body.monto_inicial,
    },
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          error: "Error al registrar apertura de caja",
        });
      }
      res.json({
        mensaje: "ingreso de dinero registrado con exito",
        Id_apertura: results.insertId,
      });
    }
  );
};

const registrarCierreCaja = (req, res) => {
  const { Id_apertura, monto_esperado, monto_ventas, monto_real, diferencia } =
    req.body;
  connection.query(
    `INSERT INTO cierre_caja SET ?`,
    {
      Id_apertura: Id_apertura,
      monto_ventas: monto_ventas,
      monto_esperado: monto_esperado,
      monto_real: monto_real,
      diferencia,
    },
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          error: "Error al registrar cierre de turno",
        });
      }
      res.json({
        mensaje: "Cierre de turno registrado con exito",
        Id_cierre: results.insertId,
      });
    }
  );
};

const totalVentasDia = (req, res) => {
  const Id_usuario = req.params.Id_usuario;
  const Id_apertura = req.params.Id_apertura;

  connection.query(
    `SELECT IFNULL(
    SELECT SUM (precioTotal_Venta)
    FROM venta
    WHERE Id_usuario=?
    AND Id_metodopago!=5
    AND fecha_registro >= (
    SELECT fecha_apertura
    FROM aperturas_caja
    WHERE Id_apertura = ?)), 0)
    +
    IFNULL(
    SELECT SUM(monto)
    FROM pagosclientes
    WHERE fecha_pago >= (
    SELECT fecha_apertura
    FROM aperturas_caja
    WHERE Id_apertura = ?)),0)
    +
    IFNULL(
    SELECT monto_inicial
    FROM aperturas_caja
    WHERE Id_apertura=?),0) AS total_esperado`,
    [Id_usuario, Id_apertura, Id_apertura, Id_apertura],
    (error, results) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ error: "Error al calcular total esperado" });
      }
      res.json({
        total_esperado: results[0].total_esperado,
      });
    }
  );
};


module.exports = {registrarAperturaCaja, registrarCierreCaja,totalVentasDia}
