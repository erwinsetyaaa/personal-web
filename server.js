const express = require("express");
const app = express();
const port = 3000;

app.set ("view engine", "hbs")

app.use(express.static ("assets"))

// HOME
app.get("/", (req, res) => {
  res.render("index");
});

// CONTACT ME
app.get("/", (req, res) => {
  res.render("contact");
});

// BLOG
app.get("/", (req, res) => {
  res.render("blog");
});