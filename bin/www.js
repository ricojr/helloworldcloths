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


//  store page 
app.get("/store", function(req, res){

  // render 8-product-store.ejs page as store route
  res.render(__dirname + "/views/8-product-store.ejs", {title: "Shop Our Store", para: "conten goes here"})
})

//  men  page 
app.get("/men", function(req, res){

  // render 2-product-men.ejs page as store route
  res.render(__dirname + "/views/2-product-men.ejs", {title: "Shop Men", para: "conten goes here"})
})
//  women  page 
app.get("/women", function(req, res){

  // render 3-product-women.ejs page as store route
  res.render(__dirname + "/views/3-product-women.ejs", {title: "Shop Women", para: "conten goes here"})
})


//  contact page 
app.get("/contact", function(req, res){

  // render 7-contact.ejs page as contact route
  res.render(__dirname + "/views/7-contact.ejs", {title: "Shop men", para: "conten goes here"})
})

//  cart page 
app.get("/cart", function(req, res){

  // render 6-cart.ejs page as cart route
  res.render(__dirname + "/views/6-cart.ejs", {title: "Your Card", para: "conten goes here"})
})


//  Sign-in page 
app.get("/signIn", function(req, res){

  // render 4-sign-in.ejs page as singIn route
  res.render(__dirname + "/views/4-sign-in.ejs", {title: "SingUp", para: "conten goes here"})
})

//  Sign-up page 
app.get("/signUp", function(req, res){

  // render 5-sign-un.ejs page as singUp route
  res.render(__dirname + "/views/5-sign-up.ejs", {title: "SingIn", para: "conten goes here"})
})


app.listen(port, function(){
  console.log(`Server started at port: ${port}`);
})
