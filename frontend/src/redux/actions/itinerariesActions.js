import axios from "axios";


const itinerariesActions = {

    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/itineraries")
            // console.log(res)
            dispatch({ type: "GETITINERARIES", payload: res.data.response.itineraries })

        }
    },


    getOneItinerary: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            // console.log(res)
            dispatch({ type: 'GETONEITINERARY', payload: res.data.response })
        }
    },

    getItinerariesByCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itinerarybycity/${id}`)
            // console.log(res)
            dispatch({ type: 'GETITINERARIESBYCITY', payload: res.data.response })
        }
    },

}

export default itinerariesActions