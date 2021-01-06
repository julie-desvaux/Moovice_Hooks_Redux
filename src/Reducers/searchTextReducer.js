const searchTextReducer = (state = { searchText: "", searchList: "", menu: false, smallScreen: false }, action) => {
    
    switch (action.type) {
        case 'ADD_SEARCH_TEXT' :
            return {
                ...state,
                searchText: action.payload
            }
        case 'ADD_SEARCH_LIST' :
            return {
                ...state,
                searchList: action.payload
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