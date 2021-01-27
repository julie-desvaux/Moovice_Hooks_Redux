const discoverReducer = (state = { discover: [], discoverTv: [], onAirTv: [] }, action) => {

    switch (action.type) {
        case 'ADD_DISCOVER' : 
            return {
                ...state,
                discover: action.payload
            }
        case 'ADD_DISCOVER_TV' : 
            return {
                ...state,
                discoverTv: action.payload
            }
        default: return state
    }

}

export default discoverReducer