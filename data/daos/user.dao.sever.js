const userModel = require("../models/user/user.model.server")
const mongoose = require('mongoose')
const createUser = (user) =>
    userModel.create(user)

// const updateUser = (user) =>
//     userModel.updateOne()



const findUserById = (Id) =>
    userModel.findById(Id)

const findAllUser = () =>
    userModel.find()

const findByUserName = (username) =>
    userModel.find({username: username})

const findUserByEmail = (email) =>
    userModel.find({email : email})

const addFollowerToFollow = (followId, followerId) =>
     userModel.findByIdAndUpdate({_id:followId},{
            $push: {
                follow: mongoose.Types.ObjectId(followerId),
            }
        },function(err, result) {
         if (err) {
             console.log(err);
         }})


const addFollowToFollower = (followId, followerId) =>
    userModel.findByIdAndUpdate({_id:followerId},{
        $push: {
            followers:  mongoose.Types.ObjectId(followId),
        }
    },function(err, result) {
            console.log(result)
            console.log(err);
        })


const deleteUserById =(id) =>
    userModel.deleteOne({_id:mongoose.Types.ObjectId(id)})
        .then(result => console.log(result))


const addFollowRelationship =(followId, followerId) =>
{
    addFollowerToFollow(followId,followerId);
    addFollowToFollower(followId,followerId);
}
module.exports = {
    createUser,
    findUserById,
    findAllUser,
    findByUserName,
    addFollowRelationship,
    findUserByEmail,
    deleteUserById
}

