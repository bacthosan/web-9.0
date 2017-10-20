const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');

const viewRouter = require('./viewRouter');
const questionRouter = require('./questionRouter');
const fileController = require('./fileController');

let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended : true } ) );

app.get('/',(req,res)=>{
  res.render("home");
})
app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname + "/public/style.css")
})
app.get('/about',(req,res)=>{
  res.render("about");
})
app.use('/ask', viewRouter);
// app.post('/question',(req,res)=>{
//   console.log(req.body);
//   res.redirect('/');
// })
app.use('/question',questionRouter);
app.listen(6969,(err)=>{
  if ( err ) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})
//   console.log(Math.floor((Math.random() * 10) + 1 ));

// router.post('/',(req,res)=>{
//   res.render("question");
//   console.log(req.body);
// })
