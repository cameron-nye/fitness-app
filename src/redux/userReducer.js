import axios from 'axios'

const initialState = {
  user: {},
}

const GET_USER = 'GET_USER'
const EDIT_AGE = 'EDIT_AGE'
const EDIT_HEIGHT = 'EDIT_HEIGHT'
const EDIT_WEIGHT = 'EDIT_WEIGHT'

export function getUser(){
  let userData = axios.get('/auth/me')
                  .then((res) => {
                    return res.data
                  })
  return {
    type: GET_USER,
    payload: userData
  }
}

export function editAge(age, id){
  let userAge = axios
    .put(`/user/update/${id}`, {age})
    .then((res) => {
      console.log(res.data)
      return res.data
    })
  return {
    type: EDIT_AGE,
    payload: userAge
  }
}

export function editHeight(height, id){
  let userHeight = axios
    .put(`/user/update_height/${id}`, {height})
    .then((res) => {
      // console.log(res.data)
      return res.data
    })
  return {
    type: EDIT_HEIGHT,
    payload: userHeight
  }
}

export function editWeight(weight, id){
  let userWeight = axios
    .put(`/user/update_weight/${id}`, {weight})
    .then((res) => {
      console.log(res.data)
      return res.data
    })
  return {
    type: EDIT_WEIGHT,
    payload: userWeight
  }
}

export default function userReducer(state=initialState, action){
  switch(action.type){
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {user: action.payload})
    case EDIT_AGE:
      return Object.assign({}, state, {user_age: action.payload})
    case EDIT_HEIGHT:
      return Object.assign({}, state, {user_height: action.payload})
    case EDIT_WEIGHT:
      return Object.assign({}, state, {user_weight: action.payload})
    default:
      return state
  }
}