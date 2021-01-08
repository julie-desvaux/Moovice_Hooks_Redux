const favoriteReducer = (state = { icon: "favorite_border" }, action) => {

    switch (action.type) {
        case 'ICON_FAVORITE' :
            return {
                ...state,
                icon: action.payload
            }
        default: return state
    }

}

export default favoriteReducer