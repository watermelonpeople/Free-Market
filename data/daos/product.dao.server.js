const productModel = require('../models/prodect/product.model.server')
const mongoose = require('mongoose')
const storeModel = require('../models/store/store.model.server')

const findProductByName = (name) =>
    productModel.find({name:name})

const findProductByStoreId = (storeId) =>
    productModel.find({store:mongoose.Types.ObjectId(storeId)})

const findAllProduct = () =>
    productModel.find()
        .populate("store")
        .exec()


const createProductForStore = (storeId,product) => {
    product.store = mongoose.Types.ObjectId(storeId)
    return productModel.create(product)
        .then(newProduct => storeModel
            .updateOne(
                {_id: mongoose.Types.ObjectId(storeId)},
                {
                    $push: {
                        products: newProduct,
                    }
                })
        )
}

module.exports ={
    createProductForStore,
    findProductByName,
    findAllProduct,
    findProductByStoreId
}