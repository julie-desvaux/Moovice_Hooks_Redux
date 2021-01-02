const searchTextReducer = (state = { searchText: "", menu: false, smallScreen: false }, action) => {
    
    switch (action.type) {
        case 'ADD_SEARCH_TEXT' :
            return {
                ...state,
                searchText: action.payload
            }
        case 'SHOW_MENU' :
            return {
                ...state,
                menu: action.payload
            }
        case 'SMALL_SCREEN':
            return {
                ...state,
                smallScreen: action.payload
            }
        default: return state
    }

}

export default searchTextReducer