const tvReducer = (state = { onAirTv: [] }, action) => {
	switch (action.type) {
		case "ADD_ON_AIR_TV":
			return {
				...state,
				onAirTv: action.payload,
			};
		default:
			return state;
	}
};

export default tvReducer;
