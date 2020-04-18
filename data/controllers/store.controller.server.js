const storeDao = require('../daos/store.dao.server')

module.exports = (app) => {

    app.get('/api/findStoreByCategory/:category', (req,res) =>
    storeDao.findStoreByCategory(req.params.category)
        .then(results => res.json(results)));

    app.get('/api/findStoreByName/:name',(req,res) =>
    storeDao.findStoreByName(req.params.name)
        .then(results => res.json(results)));

    app.get('/api/findStoreByCity/:city',(req,res) =>
    storeDao.findStoreByCity(req.params.city)
        .then(results => res.json(results)));


    app.get('/api/findStoreByUserId/:userId',(req,res) =>
    storeDao.findStoreByUserId(req.params.userId)
        .then(results => res.json(results)))


    app.get('/api/findStoreByStoreId/:storeId',(req,res) =>
    storeDao.findStoreById(req.params.storeId)
        .then(results => res.json(results)))



    app.post('/api/createStore',(req,res) =>{
        res.sendStatus(200)
        storeDao.createStoreForSeller(req.body.user_id,{
            business_id:req.body.business_id,
            name:req.body.name,
            address: req.body.address,
            city:req.body.city,
            state:req.body.state,
            postal_code:req.body.postal_code,
            stars:req.body.stars,
            review_count:req.body.review_count,
            attributes:req.body.attributes,
            categories:req.body.categories,
            hours:{
                Monday:req.body.forHours.Monday,
                Tuesday: req.body.forHours.Tuesday,
                Wednesday: req.body.forHours.Wednesday,
                Thursday: req.body.forHours.Thursday,
                Friday: req.body.forHours.Friday,
                Saturday: req.body.forHours.Saturday,
                Sunday: req.body.forHours.Sunday
            }
        })
    })



}