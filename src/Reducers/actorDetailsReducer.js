const actorDetailsReducer = (state = { actorDetails: "", actorMoviesList: "" }, action) => {

    switch (action.type) {
        case 'ADD_ACTOR_DETAILS' :
            return {
                ...state,
                actorDetails: action.payload
            }
        case 'ADD_ACTOR_MOVIES_LIST' :
            return {
                ...state,
                actorMoviesList: action.payload
            }
        default: return state
    }

}

export default actorDetailsReducer