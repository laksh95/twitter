var express = require('express');
var router = express.Router();
var passport = require('passport');

module.exports = (app) => {

	app.get('/', function(req, res) {
  		res.render('index', { title: 'Test Web App' });
	});

	app.get('/home', function(req, res) {
  		res.render('home', { title: 'Welcome to the test app' });
	});

	app.get('/auth/twitter', passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/error' }),
	  function(req, res) {
	    res.redirect('/home');
	  });

	app.get('/error', function(req, res) {
  		res.render('error', { title: 'Error' });
	});
}
