const Review = require("../Models/reviewSchema.js")
const Game = require("../Models/gamesSchema.js")

const reviewController = {
    createReview: ( async(req,res) => {
        try {
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
                const updateGame = await Game.findByIdAndUpdate(gameId, { $push: { reviews: review._id }})
                console.log(updateGame)
                res.status(201).send({msg:"review work good"})
            } else {
                res.status(500).send({msg:"review no work"})
            }

        } catch (error){
            console.log(error)
        }

    }),
    getReviewByGame: ( async(req, res) => {
        try {
            return res.status(201).send({msg: "hsjdhsakdhsakjdksa", reviews: await Review.find({game:req.params.id})})
        } catch (error) {
            console.log(error)
        }
    }),

    getReviewByUser: ( async(req, res) => {
        try {
            return res.status(201).send({msg: "hsjdhsakdhsakjdksa", reviews: await Review.find({user:req.params.id})})
        } catch (error) {
            console.log(error)
        }    
    }),

    getReview: ( async(req, res) => {
        try {
            const {id} = req.params
            const review = await Review.findById(id)
    
            if(review){
                res.status(200).send({msg: "Found review", review:review})
            } else {
                res.status(404).send({msg: "review not found"})
            }

        } catch (error){
            console.log(error)
        }
    }), 
    deleteReview: ( async(req, res) => {
        try {
            const {id} = req.params;
    
            const review = await Review.findByIdAndDelete(id)
    
            res.status(200).send({msg: "review Delteteddddddeesdsadsadsa"})
            
        } catch (error){
            console.log(error)
        }
    })
}

module.exports = reviewController