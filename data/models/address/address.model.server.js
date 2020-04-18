const mongoose = require('mongoose')
const addressSchema = require('./address.schema.sever')
const addressModel = mongoose.model(
    'AddressModel', addressSchema)
module.exports = addressModel