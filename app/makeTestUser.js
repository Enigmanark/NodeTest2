console.log( process.cwd());

var User = require('./models/model_user');

var johnathan = new User({
	name: 'Elly',
	username: 'ellyn',
	password: 'password'
});

johnathan.save();