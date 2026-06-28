const express = require("express");
const cors = require("cors");

const investmentRoutes = require("./routes/investmentRoutes");

const app = express();

app.use(cors(
    {
        origin: [
            "https://ai-investment-research-agent-ruddy.vercel.app/",
            // "https://YOUR-FRONTEND.onrender.com"
        ],
        methods: ["GET", "POST"],
        credentials: true,
    }
));
app.use(express.json());

app.use("/api", investmentRoutes);

module.exports = app;