const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const testRouter = require('./routers/testRouter');
let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended : true } ) );
app.use(bodyParser.json({ extended: true }) );

app.use('/test', testRouter );

app.use(express.static(__dirname + '/public' ) );
app.listen(6969,(err)=>{
  if ( err ) {
    console.log(err);
  } else {
    console.log("website is up");
  }
})