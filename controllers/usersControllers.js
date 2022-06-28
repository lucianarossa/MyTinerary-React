const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const usersControllers = {
    signUpUsers: async (req, res) => {
        let {firstName, lastName, email, password, image, from} = req.body.userData
        try{
            const userExist = await User.findOne({email})
            if(userExist) {
               if (userExist.from.indexOf(from) !== -1){
                res.json({
                    success: false,
                    from: "signup",
                    message: "You have already Sign Up in this way please Sign In"
                })
                } else {
                const hashedPassword = bcryptjs.hashSync(password, 10)
                userExist.from.push(from)
                userExist.password.push(hashedPassword)
                await userExist.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "We have added" + from + "to your means of registration"
                })
            }
        } else {
            const hashedPassword = bcryptjs.hashSync(password, 10)
            const newUser = await new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: [hashedPassword],
                image: image,
                from: [from]
            })
            if (from !== "form-signup") {
                await newUser.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "Congratulations your user has been created with" + from
                })
            } else {
                await newUser.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "We sent you an email to validate your registration, please check your email box" 
                })
            }
         }
    } catch (error) {
        res.json({ success: false, message: "Ups! Something is wrong, try in a few minutes"})
    }
},




    logInUser: async (req, res) => {
        const {email, password, from} = req.body.loguedUser
        try{
            const userExist = await User.findOne({email})
            // const indexPass = userExist.from.indexOf(from)
            if(!userExist){
                res.json({success: false, message: "You haven't registered yet please Sign Up"})
            } else {
                if(from !== "form-signup"){
                    let matchpassword = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if(matchpassword.length > 0) {
                        const userData={
                            id: userExist._id,
                            firstName: userExist.firstName,
                            email: userExist.email,
                            from: from,
                        }
                    await userExist.save()
                    res.json({
                        success: true,
                        from: from,
                        response: {userData},
                        message: "Welcome back" + userData.firstName,
                    })

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "you have not registered with" + from + "If you want to enter with this method you must sign in with" + from
                        })
                    }
                } else {
                    let matchpassword = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if(matchpassword.length > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            email: userExist.email,
                            from: from,
                        }
                        await userExist.save()
                        res.json({
                            success:true,
                            from: from,
                            response: {userData},
                            message: "Welcome back" + userData.firstName,
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "username or password do not match",
                        })
                    }
                }
            }
        } catch (error) {
            res.json({success: false, message:"Ups! Something is wrong, try in a few minutes", console: console.log(error)})
        }
    },
}

module.exports = usersControllers