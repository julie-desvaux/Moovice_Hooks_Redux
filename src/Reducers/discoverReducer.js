const discoverReducer = (state = { discover: "" }, action) => {

    switch (action.type) {
        case 'ADD' : 
            return {
                ...state,
                discover: action.payload
            }
        default: return state
    }

}

export default discoverReducer