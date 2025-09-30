const express = require("express");
const cors = require("cors");
const { connection } = require("./database/config");

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUnitialited: true,
    store: store,
  })
);

const productos = require("./routes/Productos");
const categoria = require("./routes/Categoria");
const droguerias = require("./routes/Drogueria");
const metodopago = require("./routes/MetodoPago");
const usuarios = require("./routes/Usuarios");
const compra = require("./routes/Compra");
const Login = require("./routes/Login");
const reportes = require("./routes/Reportes");
const lotes = require("./routes/Lotes");
const caja = require("./routes/Caja");

app.use("/productos", productos);
app.use("/categoria", categoria);
app.use("/droguerias", droguerias);
app.use("/metodopago", metodopago);
app.use("/usuarios", usuarios);
app.use("/compra", compra);
app.use("/login", Login);
app.use("/reportes", reportes);
app.use("/lotes", lotes);
app.use("/caja", caja);

app.listen(3001);

connection.connect((error) => {
  if (error) throw error;
  console.log("BD conectada");
});
