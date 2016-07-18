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
const session  = require('cookie-session')
// const helpers = require('./helpers/authHelpers')

app.get('*', (req, res) => {
  res.render('errorPage')
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
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});






var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;