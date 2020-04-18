const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:String,
    description:String,
    prize:Number,
    brand:String,
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoreModel",
        required:true
    }
},{collection: 'products'});
module.exports = productSchema;