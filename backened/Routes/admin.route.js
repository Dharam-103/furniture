const express = require("express");
const { AdminModel } = require("../Models/admin.model");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

adminRouter.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const admin = await AdminModel.findOne({ email });
    if (admin) {
      res.send("Admin is already exists");
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ err: err.message });
        } else {
          const admin = new AdminModel({ name, email, password: hash, phone });
          await admin.save();
          res.send("Admin registered successfully !!");
        }
      });
    }
  } catch (err) {
    res.send({ msg: err.message });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    if (admin) {
      bcrypt.compare(password, admin.password, (err, result) => {
        if (result) {
          res.send({
            msg: "Login Successfull !!",
            token: jwt.sign({ userID: admin._id }, process.env.secretKey),
          });
        } else {
          res.send("Wrong Credentials !!");
        }
      });
    } else {
      res.send("Please Register First !!");
    }
  } catch (err) {
    res.send({ msg: err.message });
  }
});

module.exports = {
  adminRouter,
};
