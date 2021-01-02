import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import discoverReducer from './Reducers/discoverReducer'
import popularReducer from './Reducers/popularReducer'
import movieDetailsReducer from './Reducers/movieDetailsReducer'
import searchTextReducer from './Reducers/searchTextReducer'

const rootReducer = combineReducers({
  discoverReducer,
  popularReducer,
  movieDetailsReducer,
  searchTextReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);