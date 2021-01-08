const movieDetailsReducer = (state = { movieDetails: "", trailer: "", actors: "", moviesGenre: [] }, action) => {

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
        case 'ADD_MOVIES_GENRE' :
            return {
                ...state,
                moviesGenre: action.payload
            }
        default: return state
    }

}

export default movieDetailsReducer