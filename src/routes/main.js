const express = require("express");
const routes = express.Router();
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({
    _id: "632063b74fd8ba361252e4fc",
  });
  const slides = await Slider.find();
  res.render("index", {
    details: details, //now we can fetch it in index.hbs file
    slides,
  });
});
routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({
    _id: "632063b74fd8ba361252e4fc",
  });
  const slides = await Slider.find();
  res.render("gallery", {
    details,
    slides,
  });
});
module.exports = routes;
