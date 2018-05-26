var express = require('express');
var router = express.Router();

var fs = require('fs');

var users = [];
var sessions = {};

var greetName = "login";


fs.readFile('data/users.json','utf8',function(err,data){
	users =JSON.parse(data);
});

//==========GET REQUESTS==========

	//=====Pages=====
router.get('/',function(req,res,next) {
	res.redirect('/index.html');
});

router.get('/account.html',function(req,res,next) {
		if(sessions[req.session.id] === undefined){
			res.redirect('/login.html');
		}
		else {
			cSes = users[sessions[req.session.id]];
			res.render('account', {"username": greetName,"password": cSes.password, "fname": cSes.fname, "lname": cSes.lname, "email": cSes.email});
		}
});

router.get('/booking_page.html',function(req,res,next) {
		res.render('booking_page', {"username": greetName});
});

router.get('/help.html',function(req,res,next) {
		res.render('help', {"username": greetName});
});

router.get('/hotel.html',function(req,res,next) {
		res.render('hotel', {"username": greetName});
});

router.get('/hotel_profie_page.html',function(req,res,next) {
		res.render('hotel_profile_page', {"username": greetName});
});

router.get('/hotel_signup.html',function(req,res,next) {
		res.render('hotel_signup', {"username": greetName});
});

router.get('/index.html',function(req,res,next) {
		res.render('index', {"username": greetName});
});

router.get('/login.html',function(req,res,next) {
		if(sessions[req.session.id] !== undefined){
			res.redirect('/account.html');
		}
		else {
			res.render('login');
		}
});

router.get('/search.html',function(req,res,next) {
		res.render('search', {"username": greetName});
});

	//=====Files=====
router.get('/users.json',function(req,res,next) {
		 // send user info to account.html
});

//==========POST REQUESTS==========

router.post('/login.html',function(req,res,next) {
	if(req.body.email === undefined && req.body.hotelid === undefined && req.body.fname === undefined) {
		res.redirect('/login.html');
	}
	
	if (req.body.fname === undefined && req.body.hotelid === undefined) {
		for (var i = 0; i < users.length; i++) {
			if(req.body.email == users[i].email && req.body.password == users[i].password && users[i].type !== 'hotel') {
				sessions[req.session.id]= users[i].id;
				greetName = users[i].fname;
				console.log(sessions[req.session.id] + ' | ' + users[i].email);
				console.log(users[sessions[req.session.id]]);
				res.redirect('/account.html');
				}
		}
		if (sessions[req.session.id] === undefined) {
			res.redirect('login.html');
		}
	}
	else if (req.body.hotelid !== undefined) {
		for (i = 0; i < users.length; i++) {
			if(req.body.email == users[i].email && req.body.password == users[i].password && users[i].type == 'hotel') {
				sessions[req.session.id]= req.body.email;
				greetName = users[i].fname;
				res.redirect('/account.html');
				}
		}
		if (sessions[req.session.id] === undefined) {
			res.redirect('login.html');
		}
	}
	else if (req.body.fname !== undefined){
		newUser = {
			id: users.length,
			email: req.body.email,
			fname: req.body.fname,
			lname: req.body.lname,
			password: req.body.password,
			type: 'customer'
		};
		users.push(newUser);
		console.log(users);
		res.redirect('account.html');
	}
	else {
		res.redirect('login.html');
	}
});

router.post('/account.html', function(req,res,next)  {
	
});

router.post('/tokensignin', function(req,res,next)  {
	console.log(req.body.idtoken);
	for (var j = 0; j < users.length; j++) {
		if (req.body.idtoken == users[j].authToken) {
			sessions[req.session.id]= users[j].id;
			console.log(sessions[req.session.id]);
			console.log(users[sessions[req.session.id]]);
			greetName = users[j].fname;
		}
		else {
			newUser = {
			id: users.length,
			authToken: req.body.idtoken,
			email: 'Your google e-mail',
			fname: 'Ian',
			lname: 'This defs inherits from google :) (almost)',
			password: "this is secure :)",
			type: 'customer'
		};
		users.push(newUser);
		}
	}
});


module.exports = router;