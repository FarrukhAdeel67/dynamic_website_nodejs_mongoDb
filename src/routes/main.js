const express = require("express");
const routes = express.Router();
const Detail = require("../models/Detail");



routes.get("/", async (req, res) => {
 const details = await Detail.findOne({
    "_id":"632063b74fd8ba361252e4fc",
  });
  console.log(details)
  res.render("index",{
    details:details,//now we can fetch it in index.hbs file
  });
});
routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({
    "_id":"632063b74fd8ba361252e4fc",
  });
  res.render("gallery",{
    details,
  });
});
module.exports = routes;
