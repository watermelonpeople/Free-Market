const reviewModel = require("../models/review/review.model.server");
const storeModel = require('../models/store/store.model.server')
const userModel = require('../models/user/user.model.server')
const mongoose = require('mongoose')
const findAllReview = () =>
    reviewModel.find()
        .populate("business_id")
        .exec()

const findReviewById = (Id) =>
    reviewModel.findById(Id)

const findReviewForStoreByName = (name) =>
    storeModel.find({name:name})
        .populate("reviews.ReviewModel")
        .exec()

const findReviewByUserId = (userId) =>
    reviewModel.find({user_id:mongoose.Types.ObjectId(userId)})
        .populate("business_id")
        .exec()



const createReviewForStore = (storeId, userId, newStar, review) => {
    review.business_id = mongoose.Types.ObjectId(storeId)
    review.user_id = mongoose.Types.ObjectId(userId)
    return reviewModel.create(review)
        .then(newReview => update(storeId,userId,newStar,newReview._id))
}

update = (storeId, userId, newStar, id) => {

    updateForUser(userId,id);
    updateForStore(storeId,newStar,id);
    console.log(storeId,newStar)
}


const updateForStore = (storeId, newStar, id) =>
    storeModel.findByIdAndUpdate({_id:storeId},{
        $push: {
            reviews: mongoose.Types.ObjectId(id),
        },
        $set: {
            stars: newStar
        },
        $inc: {
            review_count: 1
        }

    },function(err, result) {
        if (err) {
            console.log(err);
        }})


const updateForUser = (userId,id) =>
    userModel.findByIdAndUpdate({_id:userId},{
        $push: {
            reviews: mongoose.Types.ObjectId(id),
        }
    },function(err, result) {
        if (err) {
            console.log(err);
        }})

module.exports = {
    findAllReview,
    findReviewById,
    createReviewForStore,
    findReviewForStoreByName,
    findReviewByUserId
}