let express = require('express');
let router = express.Router();
let passport = require('passport');

module.exports = (app) => {

	app.get('/', function(req, res) {
  		res.render('index', { title: 'Login to enter Twitter Bot' });
	});

	app.get('/home', function(req, res) {
  		res.render('home', { title: 'Welcome to the twitter bot' });
	});

	app.get('/auth/twitter', passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/error' }),
	  function(req, res) {
	    res.redirect('/home');
	  });

	app.get('/error', function(req, res) {
  		res.render('error', { title: 'Error' });
	});
	app.use('/api/users',require('../models/users'))
	app.use('/api/friends',require('./../models/friends'))
	app.use('/api/tweets',require('./../models/tweets'))
}
