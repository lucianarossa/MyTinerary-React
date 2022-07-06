const initialState = {
    activities: [],
    getOneActivity: {},
    getActivitiesByItinerary: []
}

const activitiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GETACTIVITIES":
            return {
                ...state,
                activities: action.payload
            }
        case "GETONEACTIVITY":
            return {
                ...state,
                getOneActivity: action.payload
            }
        case "GETACTIVITIESBYITINERARY":
            return {
                ...state,
                getActivitiesByItinerary: action.payload
            }
        default:
            return state
    }
}

export default activitiesReducer