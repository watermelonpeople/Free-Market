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
    },
    subProducts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
    }],
    belongTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
    }
},{collection: 'products'});
module.exports = productSchema;