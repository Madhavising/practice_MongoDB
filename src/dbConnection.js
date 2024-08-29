const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/shop");
    console.log("Database connected");
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = dbConnection;
