import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import discoverReducer from "./Reducers/discoverReducer";
import popularReducer from "./Reducers/popularReducer";
import movieDetailsReducer from "./Reducers/movieDetailsReducer";
import searchTextReducer from "./Reducers/searchTextReducer";
import actorDetailsReducer from "./Reducers/actorDetailsReducer";
import favoriteReducer from "./Reducers/favoriteReducer";
import tvReducer from "./Reducers/tvReducer";
import "./index.scss";

const rootReducer = combineReducers({
	discoverReducer,
	favoriteReducer,
	popularReducer,
	movieDetailsReducer,
	searchTextReducer,
	actorDetailsReducer,
	tvReducer,
});

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
