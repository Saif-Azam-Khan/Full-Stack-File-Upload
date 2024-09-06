require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.DB_URL;

const dbConnect = () => {
  mongoose.connect(uri);
  // Check if the connection is successful
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB database");
  });
};
module.exports = dbConnect;
