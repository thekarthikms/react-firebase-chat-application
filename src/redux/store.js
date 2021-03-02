import userlog from './reducers/userlog_reducer'
import chatselect from "./reducers/chatselect_reducer";
import chatlist from './reducers/chatlist_reducer'
import messagelist from './reducers/messagelist_reducer'
import messages from './reducers/messages_reducers'
import {createStore,combineReducers } from 'redux'

let rootReducer = combineReducers({userlog,chatselect,chatlist,messagelist,messages})

const store = createStore(
    rootReducer
)

export default store