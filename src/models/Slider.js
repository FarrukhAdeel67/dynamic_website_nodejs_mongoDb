const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
const Slider = new Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String,
});
module.exports = mongoose.model("slider", Slider);