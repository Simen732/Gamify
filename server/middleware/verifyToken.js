const jwt = require("jsonwebtoken")
const User = require("../Models/userSchema.js")

require("dotenv").config();

async function verifyJwt(req, res, next) {
    const jsonwebtoken = req.cookies.jwt;

    await jwt.verify(jsonwebtoken, process.env.SECRET_KEY, ( async(err,  decoded) => {
        if(err) {
            console.log(err)
            res.status(401).send({msg:"User has no entry ahahahhahahahaha"})
            return;
        }

        console.log(decoded)

        let email = decoded.email
        req.user = decoded
        
        try{

            const user = await User.findOne({email})
            req.user.id = user._id

        } catch(error){
    
            console.log(error)
            res.status(404).send({msg:"user no found"})
            return

        }
    })).then(() => {
        next();
    })
}

module.exports = verifyJwt