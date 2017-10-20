const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render("ask");
  // console.log(req.body);
})
router.get('/question',(req,res)=>{
  res.send("Question");
});
router.post('/question',(req,res)=>{
  res.redirect('/ask');
})
module.exports = router;
