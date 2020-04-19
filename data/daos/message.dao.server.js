const messageModel = require('../models/messages/message.model.server')
const mongoose = require('mongoose')
const userModel = require('../models/user/user.model.server')


const findMessageBySender = (sendId) =>
    messageModel.find({sender:mongoose.Types.ObjectId(sendId)})
        .populate('receiver')
        .exec()

const findMessageById = (Id) =>
    messageModel.find({_id:mongoose.Types.ObjectId(Id)})


const findMessageByReceiver = (receiveId) =>
    messageModel.find({receiver:mongoose.Types.ObjectId(receiveId)})
        .populate('sender')
        .exec()


const createMessage = (senderId, receiverId, message) => {
    message.senter = mongoose.Types.ObjectId(senderId)
    message.receiver = mongoose.Types.ObjectId(receiverId)
    return messageModel.create(message)
        .then(newMessage => update(senderId,receiverId,newMessage))
}

 update  = (senderId,receiverId,message)  => {

    updateForSender(senderId,message);
    updateForReceiver(receiverId,message);
}

const updateForSender = (senderId,message) =>
    userModel.findByIdAndUpdate({_id:senderId},{
        $push: {
            sendMessages: message,
        }
    },function(err, result) {
        if (err) {
            console.log(err);
        }})


const updateForReceiver = (receiverId,message) =>
    userModel.findByIdAndUpdate({_id:receiverId},{
        $push: {
            receiveMessages: message,
        }
    },function(err, result) {
        if (err) {
            console.log(err);
        }})

module.exports ={
    createMessage,
    findMessageBySender,
    findMessageByReceiver,
    findMessageById
}