const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index");
});
routes.get("/gallery", (req, res) => {
  res.render("gallery");
});
module.exports = routes;
