// const fs = require('fs');
const express = require('express');
// const fileController = require('./fileController');
// const outputFileName = "test.json";
// let fileString = "file hello world";
// let fileObject = {
//   a : 1,
//   b : 2
// }
// // let resultAsync = fs.writeFile("");
// let result =  fileController.readFile(outputFileName);
// console.log(result);
// let testWritemoduleObject = {
//   test1 : "test1",
//   test2 : "test2"
// }
// fileController.writeFile(outputFileName,testWritemoduleObject);
// let result = fs.writeFileSync("test.json"
//   ,JSON.stringify(fileObject)
//   ,{encoding:"utf-8"});
// let readFileResult = fs.readFileSync("test.json","utf-8");
// console.log(readFileResult);
// let convertedObject = JSON.parse(readFileResult);
// console.log(convertedObject);
//
// let readFileReusltAsync = fs.readFile("test.json","utf-8", (err,data)
//   => {
//     console.log(data);
// });
// console.log("result", readFileReusltAsync);
// Javascript object notation

let app = express();
app.get('/',(req,res) =>  {
  // res.send("welcom to my websit");
  res.sendFile(__dirname + "/index.html");
});
app.get('/about',(req,res) => {
  res.send("I'm Dung");
});
app.get('/testhtml',(req,res)=> {
  let test = 6;
  let es6String = `abc + ${test} + "asf`;
});
app.get('/question',(req,res)=>{
  res.send("question");
});
app.get('/style.css',(req,res)=>{
  res.sendfile(__dirname + "/style.css");
})
app.listen(6969,(err) => {
  if ( err ) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})
//http://localhost:6969/
