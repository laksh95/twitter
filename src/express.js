let passport = require('passport')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let path = require('path')
let logger = require('morgan')
let express = require('express')
let cors = require('cors')

module.exports = (app) => {
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
	  let err = new Error('Not Found');
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
}
