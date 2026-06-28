const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://YOUR-FRONTEND.onrender.com"
    ],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());