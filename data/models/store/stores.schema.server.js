const mongoose = require('mongoose');
const productSchema = require('../prodect/product.schema.server')
const reviewSchema = require('../review/review.schema.server')
const storeSchema = mongoose.Schema({
    businessId:String,
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: String,
    latitude: Number,
    longitude: Number,
    stars: Number,
    review_count: Number,
    is_open: Number,
    attributes: Object,
    categories: String,
    hours: {
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
        Sunday: String,
    },
    products:[
        productSchema
    ],
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ReviewModel"
        }
    ],
    seller:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        }
}, {collection: 'business'});
module.exports = storeSchema;