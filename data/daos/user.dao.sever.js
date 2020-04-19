const userModel = require("../models/user/user.model.server")
const mongoose = require('mongoose')
const createUser = (user) =>
    userModel.create(user)

const updateUser = (id,user) =>
    userModel.findByIdAndUpdate({_id:mongoose.Types.ObjectId(id)},{
        $set: {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            type: user.type,
            email: user.email,
            password: user.password,
            phone: [{
                number: user.phone[0].number,
            }],
            address: [{
                street1: user.address[0].street1,
                street2: user.address[0].street2,
                city: user.address[0].city,
                state: user.address[0].state,
                zip: user.address[0].zip,
            }]
        }
    })



const findUserById = (Id) =>
    userModel.find({_id:mongoose.Types.ObjectId(Id)})

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
    deleteUserById,
    updateUser
}

