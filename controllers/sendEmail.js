const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

const sendEmail = async (email, string) => {
    const myOAuth2Client = new OAuth2(
        process.env.GOOGLE_CLIENTID,
        process.env.GOOGLE_CLIENTSECRET,
        "https://developers.google.com/oauthplayground"
    )

    myOAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESHTOKEN })
    const accessToken = await myOAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { //METODOS DE AUTENTICACION
            user: process.env.USER,
            type: "OAuth2",
            clientId: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENTSECRET,
            refreshToken: process.env.GOOGLE_REFRESHTOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: process.env.USER,
        to: email,
        subject: "verify account",
        html: `
        <body style="background-image: url(./src/assets/itineraries2.png); background-position: cover; color: rgba(0, 0, 0, 0.651); font-family:Paytone One; text-align: center;">
    <div style="background-color: #95aca8a7; border-radius: 50px; margin: 2rem; padding: 1rem;">
        <h1 style="letter-spacing: 4px; font-size: 20px; text-shadow: 0px 0px 40px grey; margin: 3rem;">WELCOME<span style="font-family:'Seaweed Script', cursive; color: white; font-size: 20px;"> TRAVELER!</span></h1>
        <h2 style="font-size:20px; letter-spacing: 4px; text-shadow: 0px 0px 40px grey;">we are so very excited that you join this community!</h2>
        <h2 style="margin: 2rem; color: white; letter-spacing: 6px; text-shadow: 0px 0px 40px grey; font-size: 25px;">verify your account down below!</h2>
        <button style="background-color:#e993a6; color: black; padding: 1rem; border: none; border-radius: 30px;-webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 0px 15px 20px grey; margin: 1rem;">
        <a href=http://localhost:4000/api/verify/${string} style="text-decoration: none; color:black; font-family:Paytone One; font-size: 20px">CLICK HERE!</a>
        </button>
        <h3 style="margin: 2rem; font-size: 20px; color: white; letter-spacing: 5px; text-shadow: 0px 0px 40px grey; ">SEE YOU!</h3>
        <h3 style="font-size:20px">MyTinerary - Team</h3>
    </div>    
</body>
        `
    }


    await transporter.sendMail(mailOptions, function (error, response) { //LE APLICO AL TRANSPORTER EL METODO SENMAIL
        if (error) {
            console.log(error)
        } else {
            console.log(`check ${email} to confirm your account`)
        }

    })

}

module.exports = sendEmail
