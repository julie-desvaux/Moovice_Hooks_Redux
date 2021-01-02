const movieDetailsReducer = (state = { movieDetails: "", trailer: "", actors: "" }, action) => {

    switch (action.type) {
        case 'ADD_MOVIE_DETAILS' :
            return {
                ...state,
                movieDetails: action.payload
            }
        case 'ADD_TRAILER' :
            return {
                ...state,
                trailer: action.payload
            }
        case 'ADD_ACTORS' :
            return {
                ...state,
                actors: action.payload
            }
        default: return state
    }

}

export default movieDetailsReducer