const Tag = require("../Models/tagsSchema");

const tagController = {
    getAllTags: (async(req, res) => {
        const tags = await Tag.find()
        if (tags.lenght > 0){
            res.status(500).send({msg: "Tags work"})
        } else {
            res.status(404).send({msg: "Tags no work"})
        }
    }),
    createTag: (async(req, res) => {
        const {name} = req.body;

        const tag = await new Tag({name})
        const result = tag.save()

        if(result._id){
            res.status(201).send({msg: "tag saved"})
        }
    }),
    getTag: ((req, res) => {
       const {id} = req.params; 
    
    }),
    updateTag: ((req, res) => {
       const {id} = req.params 
        
    }),
    deleteTag: ((req, res) => {
       const {id} = req.params 
        
    }),
}

module.exports = tagController