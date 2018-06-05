import axios from 'axios'

const initialState = {
  user: {},
  workoutDate: '',
  workoutType: '',
  workoutTime: '',
  workouts: []
}

const HANDLE_DATE = 'HANDLE_DATE'
const HANDLE_TYPE = 'HANDLE_TYPE'
const HANDLE_TIME = 'HANDLE_TIME'
const SUBMIT_WORKOUT = 'SUBMIT_WORKOUT'
const GET_WORKOUTS = 'GET_WORKOUTS'

export function handleDate(date){
  return {
    type: HANDLE_DATE,
    payload: date
  }
}

export function handleType(type){
  return {
    type: HANDLE_TYPE,
    payload: type
  }
}

export function handleTime(time){
  return {
    type: HANDLE_TIME,
    payload: time
  }
}

export function getWorkouts(){
  let workoutData = axios
    .get('/workout')
    .then((res) => {
      // console.log(res.data)
      return res.data
    })
  return {
    type: GET_WORKOUTS,
    payload: workoutData
  }
}

export function submitWorkout(workoutDate, workoutType, workoutTime){
  // console.log('submit workout hit!')
  let workoutData = axios
    .post('/workout/new', {workoutType, workoutTime, workoutDate})
    .then((res) => {
      this.getWorkouts()
    })
  return{
    type: SUBMIT_WORKOUT,
    payload: workoutData
  }
}

export default function workoutReducer(state=initialState, action){
  // console.log(action)
  switch(action.type){
    case HANDLE_DATE:
      return Object.assign({}, state, {workoutDate: action.payload})
    case HANDLE_TYPE:
      return Object.assign({}, state, {workoutType: action.payload})
    case HANDLE_TIME:
      return Object.assign({}, state, {workoutTime: action.payload})
    case GET_WORKOUTS + '_FULFILLED':
      // console.log(action.payload)
      return Object.assign({}, state, {workouts: action.payload})
    default:
      return state
  }
}