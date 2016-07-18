const express = require("express");
// const passport = require('passport');
const knex = require("../db/knex");
const router = express.Router();

router.get('/', (req,res) =>{
  res.render('home')
})





module.exports = router;