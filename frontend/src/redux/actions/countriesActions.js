import axios from "axios";


const countriesActions = {

    getCountries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/countries")
            dispatch({ type: "GETCOUNTRIES", payload: res.data.response.countries })
        }
    },

}

export default countriesActions