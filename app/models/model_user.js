var mongoose = require('./dbConnection');

//The user template
var userSchema = new mongoose.Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true},
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String
	},
	created_at: Date,
	updated_at: Date
});

//Register the schema to the database connection through mongoose
var User = mongoose.model('User', userSchema);

//Export to make available to other scripts
module.exports = User;