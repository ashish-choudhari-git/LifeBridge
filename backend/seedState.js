const mongoose = require("mongoose");
const StateDistrict = require("./models/StateDistrict");
const fs = require("fs");
require("dotenv").config();

const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    await StateDistrict.deleteMany({});

    return StateDistrict.insertMany(
      Object.entries(data).map(([code, state]) => ({
        stateCode: code,
        stateName: state.name,
        districts: state.districts,
      }))
    );
  })
  .then(() => {
    console.log("Data inserted successfully");
    return mongoose.disconnect();
  })
  .then(() => console.log("Disconnected from MongoDB"))
  .catch((err) => console.error("Error:", err));
