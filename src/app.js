const express = require("express");
const app = express();
const port = 5000;
const hbs = require("hbs");
const  mongoose = require('mongoose');
const Detail = require("./models/Detail")
const Slider = require("./models/Slider");

const routes = require("./routes/main");//
// e.g: static/css/style.css
app.use("/static", express.static("public"));
app.use("", routes);

//template engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials('views/partials')

//db connection
//addpassword to database
mongoose.connect("mongodb+srv://farrukhadeel:17301pker@cluster0.ysuiv.mongodb.net/dynamic_website")
.then(result => {
    console.log("Database connected Successfully!");
    // Detail.create({
    //   brandName: "Info Technical Solution",
    //   brandIconUrl: "../static/images/logo.png",
    //   links:[
    //     {
    //       label:"Home",
    //       url:"/"
    //     },
    //     {
    //       label:"Services",
    //       url:"/services"
    //     },
    //     {
    //       label:"Gallery",
    //       url:"/gallery"
    //     },
    //     {
    //       label:"About",
    //       url:"/about"
    //     },
    //     {
    //       label:"Contact Us",
    //       url:"/contact-us"
    //     },
    //   ],
    // });

    // Slider.create([
    //   {
    //     title:"Learn JavaScript in very easy manner",
    //     subTitle:"JavaScript is one of the most popular programming language.",
    //     imageUrl:"/static/images/slider1.jpg",
    //   },
    //   //second one
    //   {
    //     title:"what is Node Js?",
    //     subTitle:"Node. js (Node) is an open source development platform for executing JavaScript code server-side.",
    //     imageUrl:"/static/images/slider2.jpg",
    //   },
    //   //third one
    //   {
    //     title:"what is React?",
    //     subTitle:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
    //     imageUrl:"/static/images/slider3.jpg",
    //   },
    // ]);
    


})
.catch(err => {
    console.log(err)
});
app.listen(process.env.PORT | port, () => {
  console.log(`sever is running at port ${port}`);
});
