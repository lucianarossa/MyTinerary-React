import axios from 'axios';

const usersActions = {
    signUpUser: (userData) => {
        //console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post(url+'api/auth/signup', {userData})
            //console.log(res)
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logInUser: (loguedUser) => {
        //console.log(userLogin)
        return async (dispatch, getState) => {
            const res = await axios.post(url+'api/auth/login', {loguedUser})
            //console.log(res)
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'USER',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
    },

}

export default usersActions;