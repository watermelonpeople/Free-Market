const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yichangliumongodb:123456qaz@cluster0-ozaxq.mongodb.net/project');
mongoose.set('useNewUrlParser', true);
const reviewDao = require('./daos/review.dao.server')
const userDao = require('./daos/user.dao.sever')
const storeDao = require('./daos/store.dao.server')
const storeModel = require('./models/store/store.model.server')
const productDao = require('./daos/product.dao.server')
// storeModel.findById('5e86917df88f987054df1731')
//     .then(stores => console.log(stores))

//
// storeDao.findStoreByName("Carlos Santo, NMD").then(result => console.log(result))

// userDao.findUserById('5e8f2f80e84e4f55e4cc85f0')
//     .then(user =>console.log(user))
//
// const a = storeModel.findOne(mongoose.Types.ObjectId('5e86917df88f987054df1732'))
// console.log(a)
// userDao.createUser({
//     firstname:'bob',
//     lastname: 'bob',
//     username: 'bob',
//     type:"customer",
//     email: "bob@gmail.com",
//     password: 'bob',
//     phone:[
//         {
//             number:123-456-6789.,
//             primary:1,
//         },
//         {
//             number:234-567-7890
//         }
//     ]
// })
// userDao.findByUserName("bob").then(result => console.log(result))

// userDao.addFollowRelationship("5e90fcbf82fa591b94b292c6",'5e911b3c9c4d5b04e4a305ed');

 // userDao.addFollowRelationship("5e90fcbf82fa591b94b292c6",'5e911b3c9c4d5b04e4a305ed');

// storeDao.findStoreByCategory("shopping")
// .then(results => console.log(results))

// storeDao.findStoreByCity("las vegas")
// .then(results => console.log(results))

// storeDao.findStoreByName("Starbucks")
// .then(results =>console.log(results))

// userDao.findUserByEmail("alice@gmail.com")
// .then(result =>console.log(result))

// userDao.deleteUserById('5e937c0c2686b304880c7f6e')
// // .then(result =>console.log(result))

// storeDao.findStoreByName('Noodles').then(result => console.log(result))

// productDao.findAllProduct().then(result => console.log(result))

// storeDao.findStoreByUserId('5e94c2088cbd8218707464ae').then(result => console.log(result))

reviewDao.findReviewForStoreByName('Noodles').then(result => console.log(result))