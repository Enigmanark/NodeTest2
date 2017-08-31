var User = require('./models/model_user');
var search = "Elly"

User.findOne( {name : search}, function(err, user) {
	console.log("Searching users for name: " + search);
	console.log(	
		"Found this result" + "\n" +
		"Name: " + user.name + "\n" +
		"Username: " + user.username
	);
});