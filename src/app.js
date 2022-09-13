const express = require("express");
const app = express();
const port = 5000;
const hbs = require("hbs");
const  mongoose = require('mongoose');
const Detail = require("./models/Detail")

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
})
.catch(err => {
    console.log(err)
});
app.listen(process.env.PORT | port, () => {
  console.log(`sever is running at port ${port}`);
});
