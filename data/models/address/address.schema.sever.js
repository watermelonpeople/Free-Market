const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    street1:String,
    street2:String,
    city:String,
    state:String,
    zip:{type:Number, default:'00000'},
    primary:{type:Boolean, default: "1"}
});
module.exports = addressSchema;