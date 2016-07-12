var environment = process.env.NODE_ENV || 'development'; //sets up an environment such as testing, staging, development--default  
var config = require('../knexfile.js')[environment]; //value corresponding to the key of environment 
module.exports = require('knex')(config); //node knows about knex so you do not have to specify 
