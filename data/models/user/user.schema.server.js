const mongoose = require('mongoose');
const phoneScheme = require('../phone/phone.schema.server')
const addressSchema = require("../address/address.schema.sever")
const messageSchema = require('../messages/message.schema.server')
const userSchema = mongoose.Schema({
    firstname:String,
    lastname: String,
    username: String,
    type:{type:String, enum:['customer','seller']},
    email: String,
    password: String,
    phone:[
        phoneScheme
    ],
    address:[
        addressSchema
    ],
    follow:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        }
    ],
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        }
    ],
    stores:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StoreModel'
        }
    ],
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ReviewModel'
        }
    ],
    sendMessages:[
        messageSchema
    ],
    receiveMessages:[
        messageSchema
    ]
}, {collection: 'users'});





module.exports = userSchema;