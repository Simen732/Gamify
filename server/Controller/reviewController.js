const Review = require("../Models/reviewSchema.js")

const reviewController = {
    createReview: ( async(req,res) => {
        const {gameId} = req.params;
        const {comment, recommended, stars} = req.body;
        const email = req.user.email
        let userId = req.user.id


        const review = await Review.create({
            user: userId,
            game: gameId,
            comment: comment,
            recommended: recommended,
            stars: stars
        })

        if(review){
            res.status(201).send({msg:"review work good"})
        } else {
            res.status(500).send({msg:"review no work"})
        }

    }),
    getReviewByGame: ( async() => {

    }),
    getReviewByUser: ( async() => {

    }),
    getReview: ( async() => {

    }),
    deleteReview: ( async() => {

    })
}

module.exports = reviewController