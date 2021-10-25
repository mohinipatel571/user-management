const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/mongo");
const userschema = require("../db/mogooseschema");
const fs = require("fs");

const login = express.Router();
login.use(bodyParser.json());

login.route("/").all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});
login.post(async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await db.collection("users").findOne({ email: email });
    if (useremail.password === password) {
      res.status(201).render("home");
    } else {
      res.send("password are not matching");
    }
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
});
