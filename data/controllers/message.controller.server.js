const messageDao = require('../daos/message.dao.server')
const mongoose = require('mongoose')
module.exports = (app) => {

    app.post('/api/message', (req, res) =>{
        res.sendStatus(200)
        console.log(req.body)
        messageDao.createMessage(req.body.sender,req.body.receiver,{
            sender:mongoose.Types.ObjectId(req.body.sender),
            receiver:mongoose.Types.ObjectId(req.body.receiver),
            text: req.body.text,
            time: req.body.time
            }
        )
    })

    app.get('/api/sender/:sender', (req, res) =>
        messageDao.findMessageBySender(req.params.sender)
            .then(store => res.json(store)))


    app.get('/api/messageSearch/:Id', (req, res) =>
        messageDao.findMessageById(req.params.Id)
            .then(store => res.json(store)))


    app.get('/api/receiver/:receiver', (req, res) =>
        messageDao.findMessageByReceiver(req.params.receiver)
            .then(store => res.json(store)))


}