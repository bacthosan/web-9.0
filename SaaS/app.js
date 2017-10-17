const express = require('express');
const bodyParser = require('body-parser');
const viewRouter = require('./viewRouter');
const questionRouter =
const fs = require("fs");
let app = express();
app.use(bodyParser.urlencoded({ extended : true } ) );
app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/public/menu.html")
})
app.get('/home',(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname + "/public/style.css")
})
app.get('/about',(req,res)=>{
  res.sendFile(__dirname + "/public/cv.html")
})
app.post('/postabout',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
  // res.send(req.body);
})
/*
  read file question listen
  if error -> question list = [];
  success => question list = [question1,2,3,4]
  question list push {question : req.body.question, yes:0,no: 0 }
  save file
*/
app.use('/ask', viewRouter);
app.listen(6969,(err)=>{
  if ( err ) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})
