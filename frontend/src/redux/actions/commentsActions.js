import axios from "axios";

const commentsActions = {

    addComment: (comment) => {
        console.log(comment)
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/itineraries/comment", {comment}, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            dispatch({
                type: "MESSAGE",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

    modifyComment : (comment) => {
        console.log(comment)
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/itineraries/comment", {comment}, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            dispatch({
                type: "MESSAGE",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

    deleteComment: (id) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/itineraries/comment/${id}`, {}, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            dispatch({
                type: "MESSAGE",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }

    }
}

export default commentsActions