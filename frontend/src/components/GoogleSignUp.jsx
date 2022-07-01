import React, { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import "../styles/App.css"
import toast from 'react-hot-toast';


function GoogleSignUp() {
    const dispatch = useDispatch();

    async function handleCallBackResponse(response) {
        console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);

        const res = await dispatch(usersActions.signUpUser({
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            email:userObject.email,
            password:userObject.sub,
            image: userObject.picture,
            // country: {type: String},
            from: "google"

        }))

        const errormsg = res.data.message
        if(res.data.from === "validator"){
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        } 
        if (res.data.from === "signup") {
            if(res.data.success){
                toast.success(res.data.message)
            }else{
                toast.error(res.data.message)
            }
        }


    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "958184465312-pfbfd9bnsmu4sn2mfb40bnqj257c6557.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "filled_black", size: "small", locale:'en-IN',text:'signup_with', shape:"pill"}
        )
    });

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )





}

export default GoogleSignUp