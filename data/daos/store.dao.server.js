const storeModel = require('../models/store/store.model.server')
const userModel = require('../models/user/user.model.server')
const mongoose = require('mongoose')

const findStoreByName = (name) =>
    storeModel.find({name:name})
        .populate('seller')
        .exec()


const findStoreById = (Id) =>
    storeModel.findById(Id)
        .populate('seller')
        .exec()

const findStoreByCategory =(category) =>
    storeModel.find( {categories:{ $regex: category, $options: "i" }})

const findStoreByCity = (city) =>
    storeModel.find({city:city})

const findStoreByUserId = (userId) =>
    storeModel.find({seller:mongoose.Types.ObjectId(userId)})



const createStoreForSeller = (userId, store) => {
    store.seller = mongoose.Types.ObjectId(userId)
    return storeModel.create(store)
        .then(newStore => userModel
            .updateOne(
                {_id: mongoose.Types.ObjectId(userId)},
                {
                    $push: {
                       stores: newStore._id,
                    }
                })
        )
}

module.exports ={
    findStoreByName,
    findStoreById,
    findStoreByCategory,
    findStoreByCity,
    findStoreByName,
    createStoreForSeller,
    findStoreByUserId
}