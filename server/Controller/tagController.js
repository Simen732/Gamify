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

        const tag = new Tag({name})
        const result = await tag.save()

        if(result._id){
            res.status(201).send({msg: "tag saved"})
        } else {
            res.status(404).send({msg: "tag nononoonononoon"})
        }
    }),
    getTag: (async(req, res) => {
       const {id} = req.params; 
       let tag = await Tag.findById(id)
        if (tag) {
            res.status(200).send({msg: "Tag has been found", tag:tag})
        } else {
            res.status(404).send({msg: "Tag not found"})
        }
    }),
    updateTag: ( async (req, res) => {
        const {id} = req.params 
        const {name} = req.body
       
        const tag = await Tag.findByIdAndUpdate(id, {name:name})

        if(tag){
            res.status(202).send({msg:"tag good", tag:tag})
       } else {
            res.status(500).send({msg:"tag bad"})
       }
        
    }),
    deleteTag: ( async(req, res) => {
       const {id} = req.params 

       const tag = await Tag.findByIdAndDelete(id);
       if (tag){
        res.status(200).send({msg:"tag delete good"})
       } else {
        res.status(500).send({msg:"tag delete bad"})
       }
    }),
}

module.exports = tagController