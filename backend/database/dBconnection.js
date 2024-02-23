const mongoose = require("mongoose");
require('dotenv').config(); 

const mongoString = process.env.DB_URL;
function connectToDb() 
{
  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}

module.exports = connectToDb ;
