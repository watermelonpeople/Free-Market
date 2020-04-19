const productModel = require('../models/prodect/product.model.server')
const mongoose = require('mongoose')
const storeModel = require('../models/store/store.model.server')

const findProductByName = (name) =>
    productModel.find({name: name})

const findProductByStoreId = (storeId) =>
    productModel.find({store: mongoose.Types.ObjectId(storeId)})

const findAllProduct = () =>
    productModel.find()
        .populate("store")
        .exec()

const findProductById = (id) =>
    productModel.find({_id: mongoose.Types.ObjectId(id)})

const createSubProductForStore = (storeId, mainProductId, product) => {
    product.store = mongoose.Types.ObjectId(storeId)
    product.belongTo = mongoose.Types.ObjectId(mainProductId)
    return productModel.create(product)
        .then(newProduct => updateTwo(storeId, mainProductId, newProduct))
}


updateTwo = (storeId, mainProductId, newProduct) => {
    updateForStore(storeId, newProduct);
    updateForProduct(mainProductId, newProduct);
}

const updateForStore = (storeId, newProduct) =>
    // console.log(storeId,newProduct)
    storeModel
        .findByIdAndUpdate(
            {_id: storeId},
            {
                $push: {
                    products: newProduct,
                },
            },function(err, result) {
                if (err) {
                    console.log(err);
                }
            }
            )


const updateForProduct = (mainProductId, newProduct) =>
    productModel
        .findByIdAndUpdate(
            {_id: mainProductId},
            {
                $push: {
                    subProducts: newProduct._id
                }
            },
            function (err, result) {
                if (err) {
                    console.log(err);
                }
            }
        )


const createProductForStore = (storeId, product) => {
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

module.exports = {
    createProductForStore,
    findProductByName,
    findAllProduct,
    findProductByStoreId,
    createSubProductForStore,
    findProductById
}