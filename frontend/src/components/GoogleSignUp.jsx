import React, { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import "../styles/App.css"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"


function GoogleSignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
            from: "GOOGLE"

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
                navigate("/login")
            }else{
                toast.error(res.data.message)
            }
        }


    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '277557540971-8b2gtsg5fh2oh0257uh4p2dq9a24d7ml.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "filled_black", size: "small", locale:'en',text:'signup_with', shape:"pill"}
        )
    }); 

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )





}

export default GoogleSignUp