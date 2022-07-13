import axios from "axios";

const commentsActions = {

    addComment: (comment) => {
        // console.log("COMMENT",comment)
        return async (dispatch, getState) => {
            try{
            const token = localStorage.getItem("token")
            const res = await axios.post("https://mytinerary-rossa.herokuapp.com/api/itineraries/comment", {comment}, {
                headers: {
                    "Authorization": "Bearer " + token
                }
                
            })
            // console.log("RESP ACTIONS",res)

            return res.data

            }catch (error){
                console.log(error)
            }
        } 
    },

    modifyComment: (comment) => {
        console.log(comment)
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
                const res = await axios.put("https://mytinerary-rossa.herokuapp.com/api/allItineraries/comment", { ...comment }, {
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                console.log(res)

                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })

                return res

            }catch(err){
                console.log(err)
            }

        }
    } ,
  
  
    deleteComment: (id) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.post(`https://mytinerary-rossa.herokuapp.com/api/itineraries/comment/${id}`, {}, {
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