const express = require("express");
// const passport = require('passport');
const knex = require("../db/knex");
const router = express.Router();

router.get('/', (req,res) =>{
  res.render('home')
})


router.get('/public_spaces', (req, res) => {
  knex('public_spaces').select().then(public_spaces => {
    res.format({json:function(){res.send(public_spaces)}})
  });
});


module.exports = router;