import axios from 'axios';

const usersActions = {
    signUpUser: (userData) => {
        // console.log(userData)
        return async (dispatch, getState) => {
            try{
            const res = await axios.post("http://localhost:4000/api/auth/signup", {userData})
            // console.log(res)
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
           return res
        } catch (error) {
            // console.log(error)
        }
            
        }
    },
    
    logInUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/auth/login", {userData})
            // console.log(res)
            // if(res.data.success) {
                // localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'USER',
                    payload: { 
                    userData: res.data.response.userData,
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
                })
            // } else {
                // dispatch({
                //     type: 'MESSAGE',
                //     payload: {
                //         view: true,
                //         message: res.data.message,
                //         success: res.data.success
                //     }
                // })
                return res
            }
        } 
    }

// }

export default usersActions;