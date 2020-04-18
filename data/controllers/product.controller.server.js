const productDao = require("../daos/product.dao.server")

module.exports = (app) => {
    app.post('/api/createNewProduct', (req, res) =>{
        res.sendStatus(200)
        productDao.createProductForStore(req.body.store_id,{
            name:req.body.name,
            description:req.body.description,
            prize:req.body.prize,
            brand:req.body.brand
    }
    )
    })


    app.get('/api/findProductByStoreId/:storeId', (req,res) =>
        productDao.findProductByStoreId(req.params.storeId)
            .then(user => res.json(user)));



    app.get('/api/findProductByName/:productName', (req, res) =>
        productDao.findProductByName(req.params.productName)
            .then(user => res.json(user)));


    app.get('/api/findAllProduct', (req, res) =>
        productDao.findAllProduct()
        .then(products => res.json(products)));

    app.get('/', (req, res) =>
        productDao.findAllProduct()
            .then(products => res.json(products)));
}