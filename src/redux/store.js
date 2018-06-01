import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import goalReducer from './goalReducer'
import userReducer from './userReducer'


let rootReducer = combineReducers({goalReducer: goalReducer, userReducer:   userReducer }) 

export default createStore(rootReducer, applyMiddleware(promiseMiddleware()))