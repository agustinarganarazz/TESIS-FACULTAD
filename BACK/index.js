const express = require("express");
const cors = require("cors");
const { connection } = require("./database/config");

const app = express();

app.use(express.json());
app.use(cors());

const productos = require("./routes/Productos");
const categoria = require("./routes/Categoria");
const droguerias = require("./routes/Drogueria");
const metodopago = require("./routes/MetodoPago");
const usuarios = require("./routes/Usuarios");
const compra = require("./routes/Compra");

app.use("/productos", productos);
app.use("/categoria", categoria);
app.use("/droguerias", droguerias);
app.use("/metodopago", metodopago);
app.use("/usuarios", usuarios);
app.use("/compra", compra);


app.listen(3001);

connection.connect((error) => {
  if (error) throw error;
  console.log("BD conectada");
});
