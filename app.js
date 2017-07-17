const express = require("express")
const app = express()
const methodOverride = require("method-override");
const path = require('path');
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const routes = require("./routes")
const flash = require('connect-flash')
const passport = require('passport')
// const session  = require('cookie-session')
// const helpers = require('./helpers/authHelpers')

// if (app.get('env') === 'development' || app.get('env') === 'test') {
//   require('dotenv').load();
// }

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cookieParser());
// app.use(session({
//   secret: process.env.SECRET
// }));

app.use(methodOverride("_method"));
// app.use(passport.initialize())
// app.use(passport.session())

// require('./helpers/passport.js')(passport);

// app.use(helpers.currentUser);
app.use('/', routes.home);
// app.use('/auth', routes.auth);
// app.use('/users', routes.users);
// app.use('/users/:user_id/addlocations', routes.addlocations);

app.get('*', (req, res) => {
  res.send('this is not a page')
});

app.get('/public_spaces', (req, res) => {
  knex('public_spaces').select().then(public_spaces => {
    res.send(public_spaces);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       err
//     });
//   });
// }

// production error handler

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



var port = process.env.PORT || 8000;

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;