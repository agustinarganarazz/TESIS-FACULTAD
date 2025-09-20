const { connection } = require("../database/config.js");

const verDroguerias = (req, res) => {
  connection.query(
    "SELECT * FROM drogfuerias WHERE Estado = 1",
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const crearDrogueria = (req, res) => {
  connection.query(
    "INSERT INTO droguerias SET ?",
    {
      nombre_drogueria: req.body.nombre_drogueria,
      Cuit_drogueria: req.body.Cuit_drogueria,
      telefono_drogueria: req.body.telefono_drogueria,
      direccion_drogeria: req.body.direccion_drogeria,
      correo_drogueria: req.body.correo_drogueria,
    },
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const editarDrogueria = (req, res) => {
  const Id_drogueria = req.params.Id_drogueria;
  const {
    nombre_drogueria,
    Cuit_drogueria,
    telefono_drogueria,
    direccion_drogeria,
    correo_drogueria,
  } = req.body;
  connection.query(
    `UPDATE droguerias SET
                                        nombre_drogueria= ?,
                                        Cuit_drogueria=?,
                                        telefono_drogueria=?,
                                        direccion_drogueria=?,
                                        correo_drogueria=? WHERE Id_drogueria=?`,
    [
      nombre_drogueria,
      Cuit_drogueria,
      telefono_drogueria,
      direccion_drogeria,
      correo_drogueria,
      Id_drogueria,
    ],
    (error, results) => {
      if (error) throw error;
      res.json("results", results);
    }
  );
};

const eliminarDrogueria = (req, res) => {
  const Id_drogueria = req.params.Id_drogueria;
  connection.query(
    "UPDATE droguerias SET Estado = 0 WHERE Id_categoria =" + Id_drogueria,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

module.exports={verDroguerias, crearDrogueria, editarDrogueria, eliminarDrogueria}
