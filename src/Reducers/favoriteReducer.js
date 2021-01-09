const favoriteReducer = (state = { icon: "favorite_border", favorites: []}, action) => {

    switch (action.type) {
        case 'CHANGE_ICON_FAVORITE' :
            return {
                ...state,
                icon: action.payload
            }
        case 'FAVORITE' :
            return {
                ...state,
                favorites: action.payload
            }
        default: return state
    }

}

export default favoriteReducer