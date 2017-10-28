var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var config = require('config');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookiesession = require('cookie-session');
var passport = require('passport');
var cors = require('cors');

var app = express();

require('./server/managers/passport')();

// set port 
PORT  = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

require('./server/routes/index')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('port', process.env.PORT || PORT)
app.listen(app.get('port'))
console.log("RUNNING : http://localhost: "+ PORT)


module.exports = app;
