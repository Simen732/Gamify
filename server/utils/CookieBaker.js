const jwt = require("jsonwebtoken")
require("dotenv").config();

async function CookieBaker(email, role){
    const jwtToken = jwt.sign({email: email, role}, process.env.SECRET_KEY)
    console.log(jwtToken, "Dette er din jwt token")
    return jwtToken;
}


module.exports = CookieBaker; 