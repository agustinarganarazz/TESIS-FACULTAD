const { connection } = require("../database/config");

const verMetodoPago = (req, res) => {
  connection.query(
    "SELECT * FROM metodopago WHERE Estado = 1",
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const crearMetodoPago = (req, res) => {
  connection.query(
    "INSERT INTO metodopago SET ?",
    {
      Id_metodopago: req.body.Id_metodopago,
      nombre_metodopago: req.body.nombre_metodopago,
    },
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const editarMetodoPago = (req, res) => {
  const Id_metodopago = req.params.Id_metodopago;
  const { nombre_metodopago } = req.body;
  connection.query(
    `
    UPDATE metodopago SET nombre_metodopago = ? WHERE Id_metodopago = ?`,
    [nombre_metodopago, Id_metodopago],
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const eliminarMetodopago = (req, res) => {
  const Id_metodopago = req.params.Id_metodopago;
  connection.query(
    `UPDATE metodopago SET Estado= 0 WHERE Id_metodopago =` + Id_metodopago,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

module.exports={verMetodoPago,crearMetodoPago,editarMetodoPago,eliminarMetodopago}
