const mongoose = require('mongoose');
const phoneSchema = mongoose.Schema({
    number:String,
    primary:{type:Boolean, default: "0"}
});
module.exports = phoneSchema;