const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = require('./user.schema.server')
const userModel = mongoose.model(
    'UserModel', userSchema)




module.exports = userModel