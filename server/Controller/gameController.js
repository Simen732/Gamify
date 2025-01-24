const Game = require("../Models/gamesSchema.js")

const gameController = {
    getAllGames: ( async (req, res) => {
        const games = await Game.find();
        if (games.lenght > 0){
            res.status(200).send({msg: "Games found daksdksadjksajdl", games:games})
        } else {
            res.status(404).send({msg: "Games no found ahhhhhhhhhhhhhh", games:games})

        }

    }),
    getGame: (async (req, res) => {
        const {id} = req.params

        const game = await Game.findById(id);
        
        console.log(game)
        
        res.status(200).send({msg: " game retrived", game:game})

    }),    
    createGame: ( async (req, res) => {
        const {title, price, publisher, developer, releaseDate, status, shortDescription, description } = req.body
   
        const game = new Game({
            title, 
            price, 
            publisher, 
            developer, 
            releaseDate, 
            status, 
            shortDescription, 
            description
        })
        let result = await game.save();
        console.log(result)

        if (result._id) {
            res.status(200).send({msg: "Work good hipiiiiiiiiiiiiiiiii"})
        } else {
            res.status(404).send({msg: "Work no good buuuuuuuuuuuuuuu"})
        }
    }),    
    editGame: (async(req, res) => {
        const {id} = req.params;
        const {updateContent} = req.body;
        try{
            const game = await Game.findByIdAndUpdate(id, updateContent);
    
            console.log(game, "update")
            res.status(200).send({msg: "Game has been updator hipiiiiiiiiiiiiii"})

        }catch(error){
            console.log(error, "error")

        }
    }),    
    deleteGame: (async(req, res) => {
        const {id} = req.params

        const game = await Game.findByIdAndDelete(id)
        console.log(game)

        res.status(200).send({msg: "game deletetetettetette"})
    }),
}

module.exports = gameController