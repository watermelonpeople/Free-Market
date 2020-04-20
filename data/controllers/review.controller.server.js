const reviewDao = require('../daos/review.dao.server')

module.exports = (app) => {
    app.get('/api/reviewById/:reviewId', (req, res) =>
        reviewDao.findReviewById(req.params.reviewId)
            .then(question => res.json(question)))

    app.get('/api/reviews', (req, res) =>
        reviewDao.findAllReview()
            .then(question => res.json(question)))

    app.get('/api/stores/:storeName', (req, res) =>
        reviewDao.findReviewForStoreByName(req.params.storeName)
            .then(store => res.json(store)))

    app.get('/api/reviewSearch/reviews/:id',(req,res) =>
    reviewDao.findReviewByUserId(req.params.id)
        .then(store => res.json(store)))



    app.post('/api/createReview', (req, res) => {
            res.sendStatus(200)
            return reviewDao.createReviewForStore(req.body.business_id, req.body.user_id, req.body.newStars, {
                    review_id: req.body.review_id,
                    useful: req.body.useful,
                    funny: req.body.funny,
                    cool: req.body.cool,
                    text: req.body.text,
                    date: req.body.date,
                    stars:req.body.stars
                }
            )
        }
    )
}