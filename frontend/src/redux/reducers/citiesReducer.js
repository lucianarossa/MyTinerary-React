const initialState = {
    cities: [],
    auxiliar: [],
    getOneCity: {},
    filter: []

}

const citiesReducer = (state = initialState, action) => {

    switch (action.type) {  // establece la condicion para cada case
        case "GETCITIES":
            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
                filter: action.payload // cargo todas las ciudades en filter    

            }

        case "GETONECITY":
            return {
                ...state,
                getOneCity: action.payload
            }

        case "FILTERCITIES":
            let cityFilter = state.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return {
                ...state,
                filter: cityFilter
            }

        default:
            return state
    }
}

export default citiesReducer