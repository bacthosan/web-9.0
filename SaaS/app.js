const express = require('express');
let app = express();
app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname + "/public/style.css")
})
app.get('/about',(req,res)=>{
  res.sendFile(__dirname + "/public/cv.html")
})
app.listen(6969,(err)=>{
  if ( err ) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})
