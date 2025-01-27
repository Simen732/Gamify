const Game = require("../Models/gamesSchema.js")

const gameController = {
    getAllGames: ( async (req, res) => {
        try {
            const games = await Game.find();
            if (games.lenght > 0){
                res.status(200).send({msg: "Games found daksdksadjksajdl", games:games})
            } else {
                res.status(404).send({msg: "Games no found ahhhhhhhhhhhhhh", games:games})
    
            }
        } catch (error){
            console.log(error)
        }

    }),
    getGame: (async (req, res) => {
        try {
            const {id} = req.params
    
            const game = await Game.findById(id);
            
            console.log(game)
            
            res.status(200).send({msg: " game retrived", game:game})

        } catch (error){
            console.log(error)
        }

    }),    
    createGame: ( async (req, res) => {
        try {
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

        } catch (error){
            console.log(error)
        }
    }),    
    editGame: (async(req, res) => {
        try {
            const {id} = req.params;
            const {updateContent} = req.body;
            try{
                const game = await Game.findByIdAndUpdate(id, updateContent);
        
                console.log(game, "update")
                res.status(200).send({msg: "Game has been updator hipiiiiiiiiiiiiii"})
    
            }catch(error){
                console.log(error, "error")
    
            }

        } catch (error){
            console.log(error)
        }
    }),    
    deleteGame: (async(req, res) => {
        try {
            const {id} = req.params
    
            const game = await Game.findByIdAndDelete(id)
            console.log(game)
    
            res.status(200).send({msg: "game deletetetettetette"})

        } catch (error){
            console.log(error)
        }
    }),
}

module.exports = gameController