import isLogged from './reducers/isLogged'
import {createStore,combineReducers } from 'redux'

let rootReducer = combineReducers({isLogged})

const store = createStore(
    rootReducer
)

export default store