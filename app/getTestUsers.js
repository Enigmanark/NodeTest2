var User = require('./models/model_user');

User.find(function (err, users) {
	if(err) return console.error(err);
	console.log(users);
});