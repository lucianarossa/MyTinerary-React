const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require("crypto")
const sendEmail = require("../controllers/sendEmail")
const jwt = require("jsonwebtoken")

const usersControllers = {
    signUpUsers: async (req, res) => {
        let {firstName, lastName, email, password, image, from, country} = req.body.userData
        try{
            const userExist = await User.findOne({email})
            const verification = false //por default
            const uniqueString = crypto.randomBytes(15).toString("hex")//utilizo los metodos de crypto

            //si el USUARIO EXISTE
            if(userExist) {
               if (userExist.from.indexOf(from) !== -1){
                res.json({
                    success: false,
                    from: "signup",
                    message: "You are already registered please Log In"
                })
                } else {
                const hashedPassword = bcryptjs.hashSync(password, 10)
                userExist.from.push(from)
                userExist.password.push(hashedPassword)
                await userExist.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "We add " + from + " to your registration means"
                })
            }

            //si el USUARIO NO EXISTE
        } else {
            const hashedPassword = bcryptjs.hashSync(password, 10)
            const newUser = await new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: [hashedPassword],
                image: image,
                country: country,
                from: [from],
                uniqueString: uniqueString, 
                verification: verification
            })
            // console.log(newUser)
            if (from !== "form-signup") {  //si la data NO VIENE DEL FORM
                newUser.verification = true //establezco en true para que no valide datos
                await newUser.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "Congratulations! you registered with " + from
                })
            } else { //si la data VIENE DEL FORM
                await newUser.save()
                await sendEmail(email, uniqueString)
                res.json({
                    success: true,
                    from: "signup",
                    message: "We sent you an EMAIL to validate your registration, please check your inbox" 
                })
            }
         }
    } catch (error) {
        res.json({ success: false, message: "Oops! Something went wrong try in a few minutes" ,console: console.log(error)})
        
    }
},


    logInUser: async (req, res) => {
        const {email, password, from, image} = req.body.userData
        // console.log(req.body)
        try{
            const userExist = await User.findOne({email})
            // const indexPass = userExist.from.indexOf(from)
            let matchpassword = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
 
            if(!userExist){ //si el usuario NO EXISTE
                res.json({success: false, message: "You are not registered yet please Sign Up"})

            } else { //si el usuario EXISTE

                if(from !== "form-signup"){  //EXISTE PERO NO EN SIGNUP
                    

                    if(matchpassword.length > 0) { 

                        const userData={
                            id: userExist._id,
                            firstName: userExist.firstName,
                            email: userExist.email,
                            image: userExist.image,
                            from: from,
                        }

                    const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})
                    await userExist.save()

                    res.json({
                        success: true,
                        from: from,
                        response: {token, userData}, //al front le mando token y le mando userdata
                        message: "Welcome back " + userData.firstName,
                    }) 

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You are not registered with " + from + " please Sign In"
                        })
                    }

                    //EXISTE EN SIGNUP

                } else {
                    if(userExist.verification === true) {

                    if(matchpassword.length > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            email: userExist.email,
                            image: userExist.image,
                            from: from,
                        }

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})
                        await userExist.save()
                        res.json({ 
                            success:true,
                            from: from,
                            response: {token, userData},
                            message: "Welcome back " + userData.firstName,
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "Your email or your password does not match please check",
                        })
                    }
                } else {
                    res.json({
                        success: false, 
                        from: from,
                        message: "Please check to verify your email"
                    })
                }
                }
            }
        } catch (error) {
            res.json({success: false, message:"Oops! Something went wrong try in a few minutes", console: console.log(error)})
        }
    }, 

    verifyMail: async (req, res) => {
        const string = req.params.string
        console.log(string)
        const user = await User.findOne({uniqueString: string})
        console.log(user)
        if(user){
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000")
        }
        else {res.json({
            success: false,
            message: `Your email has not been confirmed yet`})
        }
    },

    verifyToken:(req,res) =>{

        if(req,res){
            res.json({
                success:true,
                response:{id:req.user.id, firstName:req.user.firstName,email:req.user.email, image:req.user.image, from:"token"},
                messagge:"Welcome " + req.user.firstName
            })
         } else {
                res.json({
                    sucess:false,
                    message: "Please Log In again"
                })
            }
        },
}

module.exports = usersControllers