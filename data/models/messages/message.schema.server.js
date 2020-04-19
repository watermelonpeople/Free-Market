const mongoose = require("mongoose")
const messageSchema = mongoose.Schema({
   sender: {
       type:mongoose.Types.ObjectId,
       ref: "UserModel",
       required: true
   },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: "UserModel",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time: Date

},{collection: 'messages'});
module.exports = messageSchema;