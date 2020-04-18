const mongoose = require('mongoose')
const productSchema = require('./product.schema.server')
const productModel = mongoose.model(
    'ProductModel', productSchema)
module.exports = productModel