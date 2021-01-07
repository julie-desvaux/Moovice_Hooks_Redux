const actorDetailsReducer = (state = { actorDetails: "", actorMoviesList: "", actorTvList: "" }, action) => {

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
        case 'ADD_ACTOR_TV_LIST' :
            return {
                ...state,
                actorTvList: action.payload
            }
        default: return state
    }

}

export default actorDetailsReducer