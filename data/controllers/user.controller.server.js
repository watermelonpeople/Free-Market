const userDao = require('../daos/user.dao.sever')
const userModel = require('../models/user/user.model.server')
const passport = require('passport')
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});
module.exports = (app) => {


    app.get('/api/userById/:userId', function (req, res) {
        userDao.findUserById(req.params.userId, function (err, user) {
            res.json(user)

        })
    })

    app.delete('/deleteUserById/:id', (req, res) =>
        userDao.deleteUserById(req.params.id)
            .then(status => res.send(status)));


    app.get('/api/users', (req, res) =>
        userDao.findAllUser()
            .then(users => res.json(users))
    );


    app.get('/api/userByUserName/:userName', (req, res) =>
        userDao.findByUserName(req.params.userName)
            .then(user => res.json(user)));

    app.get('/api/userByEmail/:email', (req, res) =>
        userDao.findUserByEmail(req.params.email)
            .then(user => res.json(user)));


    app.post('/api/userAuth', (req, res) =>
        userModel.findOne({email: req.body.email}).then(user => res.json(user)))

    // app.get('/api/userById/:id', (req, res) =>
    //     userDao.findUserById(req.params.id)
    //         .then(user => res.json(user)));

    app.post('/api/register', (req, res) =>
        userDao.createUser({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                type: req.body.type,
                email: req.body.email,
                password: req.body.password,
                phone: [{
                    number: req.body.forPhone[0].number,
                }],
                address: [{
                    street1: req.body.forAddress[0].street1,
                    street2: req.body.forAddress[0].street2,
                    city: req.body.forAddress[0].city,
                    state: req.body.forAddress[0].state,
                    zip: req.body.forAddress[0].zip,
                }]
            }
        ).then(res.sendStatus(200)))

    // app.post('/login',function (req,res) {
    //     passport.authenticate('local', function(err, user, info){
    //         let token;
    //
    //         // If Passport throws/catches an error
    //         if (err) {
    //             res.status(404).json(err);
    //             return;
    //         }
    //
    //         // If a user is found
    //         if(user){
    //             token = user.generateJwt();
    //             res.status(200);
    //             res.json({
    //                 "token" : token
    //             });
    //         } else {
    //             // If user is not found
    //             res.status(401).json(info);
    //         }
    //     })(req, res);
    // })

}

