const mongoose = require("mongoose");
const {Schema, model} = mongoose;


const reviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true},
    game:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Game",
        required: true
    },
    comment: String,
    recommended: Boolean,
    starts:{
        type: Number, 
            min: [1, "Please give a positive interger between 1 and 6"],
            max: [6, "Please give a positive interger between 1 and 6"]
        }
})

const review = model("review", reviewSchema);

module.exports = review