const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(__dirname + "/ask.html");
});
router.get('/question',(req,res)=>{
  res.send("Question");
});
router.post('/question',(req,res)=>{

});
module.exports = router;
