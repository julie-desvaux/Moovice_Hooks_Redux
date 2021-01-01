const popularReducer = (state = { popular: "" }, action) => {
    
    switch (action.type) {
        case 'ADD_POPULAR' :
            return {
                ...state,
                popular: action.payload
            }
        default: return state
    }

}

export default popularReducer