const express = require("express");
const app = express();
const port = 5000;
const hbs = require("hbs");
const  mongoose = require('mongoose');

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
})
.catch(err => {
    console.log(err)
});
app.listen(process.env.PORT | port, () => {
  console.log(`sever is running at port ${port}`);
});
