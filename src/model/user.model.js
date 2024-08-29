const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    dob: Date,
    fatherName: String,
    email: String,
    password: String,
    role: { type: String, default: "user" },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
