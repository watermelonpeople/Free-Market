const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    review_id:String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    business_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoreModel"
    },
    stars: Number,
    useful: Number,
    funny:Number,
    cool:Number,
    text:String,
    date:Date
}, {collection: 'reviews'});
module.exports = reviewSchema;