var mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
              replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };  

var url = "mongodb://admin:johnathan9@ds115124.mlab.com:15124/jscherry"

mongoose.connect(url, options);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
	console.log('');
	console.log('Database Connected!');
});

module.exports = mongoose;