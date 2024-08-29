const User = require("../model/user.model");
const express = require("express");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = req.body;
  try {
    const user = await User.create(body);
    res.status(200).json({ status: true, data: user });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ status: false, data: "Something went wrong." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });

    if (user === null)
      res
        .status(404)
        .json({
          status: false,
          message: "Username and password is incorrect.",
        });

    res.status(200).json({ status: true, data: user });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ status: false, data: "Something went wrong." });
  }
});

module.exports = router;
