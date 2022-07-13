import axios from "axios";


const activitiesActions = {

    getActivities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-rossa.herokuapp.com/api/activities")
            // console.log(res)
            dispatch({ type: "GETACTIVITIES", payload: res.data.response.activities })

        }
    },


    getOneActivity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-rossa.herokuapp.com/api/activities/${id}`)
            // console.log(res)
            dispatch({ type: 'GETONEACTIVITY', payload: res.data.response })
        }
    },

    getActivitiesByItinerary: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-rossa.herokuapp.com/api/activitiesbyitinerary/${id}`)
            // console.log("RES",res)
            return res.data.response
        }
    },

}

export default activitiesActions 