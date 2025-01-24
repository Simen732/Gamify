const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const gameSchema = new Schema ({
    title: {type: String},
    price: {type: Number},
    discount: {type: Number},
    publisher: {type: String},
    developer: {type: String},
    realiseDate: {type: Date},
    status: {type: String},
    description: {type: String},
    img: {type: String},
    tags: 
    [   
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        required: false        
        }
    ],
    reviews: 
    [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        required: false
        }
    ],
    shortDescription: {type: String},
})

const Game = model("Game", gameSchema)

module.exports = Game;