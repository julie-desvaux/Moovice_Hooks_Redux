const movieDetailsReducer = (state = { movieDetails: "" }, action) => {

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
        default: return state
    }

}

export default movieDetailsReducer