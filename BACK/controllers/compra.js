const { connection } = require("../database/config");

const registrarCompraYLote = (req, res) => {
  connection.query(
    "INSERT INTO compra SET ?",
    {
      descripcion_compra: req.body.descripcion_compra,
      Id_drogueria: req.body.Id_drogueria,
      Id_metodopago: req.body.Id_metodopago,
      Total: req.body.Total,
      Estado: 1,
    },
    (error, results) => {
      if (error) throw error;
      const insertId = results.insertId;
      const nroComprobante = insertId.toString().padStart(5, "0");

      connection.query(
        "UPDATE compra SET Nro_comprobante = ? WHERE Id_compra = ?",
        [nroComprobante, insertId],
        (error, results) => {
          if (error) throw error;
          res.json({ insertId });
        }
      );
    }
  );
};

module.exports = { registrarCompraYLote };
