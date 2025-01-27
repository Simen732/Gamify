const Tag = require("../Models/tagsSchema");

const tagController = {
    getAllTags: (async(req, res) => {
        try {
            const tags = await Tag.find()
            if (tags.lenght > 0){
                res.status(500).send({msg: "Tags work"})
            } else {
                res.status(404).send({msg: "Tags no work"})
            }
        } catch (error){
            console.log(error)
        }
    }),
    createTag: (async(req, res) => {
        try {
            const {name} = req.body;
    
            const tag = new Tag({name})
            const result = await tag.save()
    
            if(result._id){
                res.status(201).send({msg: "tag saved"})
            } else {
                res.status(404).send({msg: "tag nononoonononoon"})
            }
        } catch (error){
            console.log(error)
        }
    }),
    getTag: (async(req, res) => {
        try {
            const {id} = req.params; 
            let tag = await Tag.findById(id)
             if (tag) {
                 res.status(200).send({msg: "Tag has been found", tag:tag})
             } else {
                 res.status(404).send({msg: "Tag not found"})
             }
        } catch (error){
            console.log(error)
        }
    }),
    updateTag: ( async (req, res) => {
        try {
            const {id} = req.params 
            const {name} = req.body
           
            const tag = await Tag.findByIdAndUpdate(id, {name:name})
    
            if(tag){
                res.status(202).send({msg:"tag good", tag:tag})
           } else {
                res.status(500).send({msg:"tag bad"})
           }
        } catch (error){
            console.log(error)
        }
        
    }),
    deleteTag: ( async(req, res) => {
        try {
            const {id} = req.params 
     
            const tag = await Tag.findByIdAndDelete(id);
            if (tag){
             res.status(200).send({msg:"tag delete good"})
            } else {
             res.status(500).send({msg:"tag delete bad"})
            }
        } catch (error){
            console.log(error)
        }
    }),
}

module.exports = tagController