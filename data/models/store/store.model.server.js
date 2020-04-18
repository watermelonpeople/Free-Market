const mongoose = require('mongoose')
const storeSchema = require('./stores.schema.server')
const storeModel = mongoose.model(
    'StoreModel', storeSchema)
module.exports = storeModel