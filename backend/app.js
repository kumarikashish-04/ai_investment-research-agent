const express = require("express");
const cors = require("cors");

const investmentRoutes = require("./routes/investmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", investmentRoutes);

module.exports = app;