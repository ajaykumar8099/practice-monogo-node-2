const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL;

const connectToDb = mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to DB...✅");
  })
  .catch((err) => {
    console.log(err, "Failed to connect DB...❌");
  });
 
module.exports = connectToDb;
