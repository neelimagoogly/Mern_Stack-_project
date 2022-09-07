var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	username: String,
	password: String
}),
buyer = mongoose.model('buyer', userSchema);

module.exports = buyer;