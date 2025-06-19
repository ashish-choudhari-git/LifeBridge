const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Used to Connect frontend-backend
const donorRoutes = require("./routes/donorRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "*", // Allow all (for dev) or specify frontend origin
  methods: ["GET", "POST"],
  credentials: true
})); // for frontend-backend interaction
app.use(express.json());// Parse JSON data coming from frontend

app.use("/api/donate", donorRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));