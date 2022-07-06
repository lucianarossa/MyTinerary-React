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

    likeDislike: (itiId) => { //RECIBE EL ID DEL ITI COMO PARAM
        const token = localStorage.getItem("token") //LEVANTO EL TOKEN
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itineraries/like/${itiId}`, {}, //ESPERA EL PUT DE AXIOS, PRIMER PARAMETRO OBJETO VACIO(PARA OCUPAR EL LUGAR DE BODY Y NO TOME EL HEADER COMO BODY) Y LUEGO EL HEADER
                {headers: {
                    Authorization: "Bearer "+ token
                }
            })
            console.log("resactions",response)
            return response.data.response

            }catch (error) {
                console.log(error)
            }
        }
    }

}

export default itinerariesActions