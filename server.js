// load express library to create HTTP server
var express = require('express')
const passport = require('passport');
const session =require('express-session')
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

var app = express()

// require('./config/passport')(passport)


mongoose.connect('mongodb+srv://yichangliumongodb:123456qaz@cluster0-ozaxq.mongodb.net/project'
,{ useNewUrlParser: true, useUnifiedTopology: true });


// load body parser library to parse JSON from HTTP BODY
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//express session
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
// }))




// //configure the passport
// app.use(passport.initialize())
// app.use(passport.session())


// configure CORS to give clients access from other domains
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// app.get('/', function (req,res) {
//    res.write("Hello World")
// })


require('./data/controllers/review.controller.server')(app)
require('./data/controllers/user.controller.server')(app)
require('./data/controllers/store.controller.server')(app)
require('./data/controllers/product.controller.server')(app)
require('./data/controllers/message.controller.server')(app)
// start server listening at port 3000 for HTTP requests
app.listen(port)