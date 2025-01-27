const User = require("../Models/userSchema.js")
const bcrypt = require("bcrypt")
const saltRounds = parseInt(process.env.SALT_ROUNDS)
const CookieBaker = require("../utils/CookieBaker.js")
const CookieMaker = require("../utils/CookieMaker.js")


const authController = {
    login: ( async (req, res) => {
        const {email, password} = req.body;

        const user = await User.findOne({email: email});
        const role = "user";
        if (!user) return res.status(404).send({msg: "Du euruerereureuruerue"})
        console.log(user)
        let hashedPassword = user.password
        const ispassword = await bcrypt.compare(password, hashedPassword)
        console.log(ispassword)

        if(ispassword){
 
            const jwtToken = CookieBaker(email, role)

            await CookieMaker(res, jwtToken);

            res.status(200).send({msg: "user found", user:user})

        }
        else{
            res.status(404).send({msg: "user not found"})
        }
        // res.send(user)
    }),
    createUser: ( async(req, res) => {
        // res.send("Du er nå laget en bruker")
        const {email, password, repeatPassword} = req.body

        const role = "user"

        if (password == repeatPassword){
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                if (err) console.log(err, "error");
                const user = new User({
                    email: email,
                    password: hash,
                    role: role
                })
                console.log(user)
                CookieBaker(email, role)
                user.save();
                const jwtToken = CookieBaker(email, role)
                await CookieMaker(res, jwtToken);
                res.status(201).send({msg: "Sign up work", user:User});
            })          
        }
        else{
            res.status(500).send({msg: "sign up no work", user:User});
        }
    })
};

module.exports = authController;