import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import goalReducer from './goalReducer'
import userReducer from './userReducer'
import workoutReducer from './workoutReducer'


let rootReducer = combineReducers({goalReducer: goalReducer, userReducer: userReducer, workoutReducer: workoutReducer }) 

export default createStore(rootReducer, applyMiddleware(promiseMiddleware()))