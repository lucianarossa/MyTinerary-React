import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import usersActions from "../redux/actions/usersActions"
import "../styles/App.css"
import toast from 'react-hot-toast';

export default function GoogleLogIn() {
    const dispatch = useDispatch();

    async function handleCallBackResponse(response) {
        let userObject = jwt_decode(response.credential);
        const res = await dispatch(usersActions.logInUser({
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }))

        console.log(res)
        if (res.data.success) {
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }


    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "958184465312-pfbfd9bnsmu4sn2mfb40bnqj257c6557.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "filled_black", size: "small", locale:'en-IN', text:'signin_with', shape:"pill"}
        )
        // eslint-disable-next-line
    });

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )

}