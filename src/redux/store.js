import userlog from './reducers/userlog_reducer'
import {createStore,combineReducers } from 'redux'

let rootReducer = combineReducers({userlog})

const store = createStore(
    rootReducer
)

export default store