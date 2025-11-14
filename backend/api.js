const express = require("express");
const cors = require("cors");

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/test", (req, res) => {
    res.json({ message: "API is working!" });
});

// Vehicles route
app.get("/vehicles", (req, res) => {
    const vehicles = [
        {
            id: 1,
            vehicle: "Ranger",
            volumetotal: 145760,
            connected: 70000,
            softwareUpdates: 27550,
            img: "ranger.png"
        },
        {
            id: 2,
            vehicle: "Mustang",
            volumetotal: 1500,
            connected: 500,
            softwareUpdates: 750,
            img: "mustang.png"
        },
        {
            id: 3,
            vehicle: "Territory",
            volumetotal: 4560,
            connected: 4000,
            softwareUpdates: 3050,
            img: "territory.png"
        },
        {
            id: 4,
            vehicle: "Bronco Sport",
            volumetotal: 7560,
            connected: 4060,
            softwareUpdates: 2050,
            img: "broncoSport.png"
        }
    ];
    res.json({ vehicles });
});

// Login route
app.post("/login", (req, res) => {
    const { nome, senha } = req.body;
    if (nome === "admin" && senha === "123456") {
        res.json({ id: 1, nome: "admin", email: "admin@email.com" });
    } else {
        res.status(401).json({ message: "Credenciais inválidas" });
    }
});

// Vehicle data route
app.post("/vehicleData", (req, res) => {
    const { vin } = req.body;
    // Simplified response for testing
    res.json({
        id: 1,
        odometro: 23344,
        nivelCombustivel: 76,
        status: "ON",
        lat: -12.2322,
        long: -35.2314
    });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
