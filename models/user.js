const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

//User Schema
const UserSchema = mongoose.Schema({
	name:{
		type: String
	},
	email:{
		type:String,
		required: true
	},
	username:{
		type : String,
		required: true
	},
	password:{
		type : String,
		required: true
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

moduel.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}