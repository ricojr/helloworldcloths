//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = 5000;


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// home page
app.get("/", function(req, res){

  // render home.ejs page as home route
  res.render(__dirname + "/views/1-index.ejs", {title: "Home", para: "conten goes here"})
})


app.listen(port, function(){
  console.log(`Server started at port: ${port}`);
})
