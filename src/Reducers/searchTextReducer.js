const searchTextReducer = (state = { searchText: "" }, action) => {
    
    switch (action.type) {
        case 'ADD_SEARCH_TEXT' :
            return {
                ...state,
                searchText: action.payload
            }
        default: return state
    }

}

export default searchTextReducer