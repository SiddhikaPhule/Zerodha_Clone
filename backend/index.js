const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

require("dotenv").config();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// CORS Options
const corsOptions = {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials to be sent
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use("/", authRoute);

// Example Route: Add Holdings
app.get("/addHoldings", async (req, res) => {
    let allHoldings = await holdingModel.find({});
    res.json(allHoldings);
});

// Example Route: Add Position
app.get("/addPosition", async (req, res) => {
    let allPosition = await positionModel.find({});
    res.json(allPosition);
});

// MongoDB Connection
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error: ", err));

// Example Route: New Order
app.post("/newOrder", (req, res) => {
    let newOrder = new ordersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("order saved successfully");
});

// Start the server
app.listen(PORT, () => {
    console.log("App Started on port", PORT);
});
