require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const pacientesRoutes = require("./routes/pacientesRoutes");
const medicosRoutes = require("./routes/medicosRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/pacientes", pacientesRoutes);
app.use("/api/medicos", medicosRoutes);
app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor iniciado en puerto ${PORT}`);
});