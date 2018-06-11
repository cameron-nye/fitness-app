import axios from 'axios'

const initialState = {
  user: {},
  ageInput: '',
  heightInput: '',
  weightInput: ''
}

const GET_USER = 'GET_USER'
const HANDLE_AGE = 'HANDLE_AGE'
const HANDLE_HEIGHT = 'HANDLE_HEIGHT'
const HANDLE_WEIGHT = 'HANDLE_WEIGHT'
const EDIT_AGE = 'EDIT_AGE'
const EDIT_HEIGHT = 'EDIT_HEIGHT'
const EDIT_WEIGHT = 'EDIT_WEIGHT'
// const EDIT_PROF_INFO = 'EDIT_PROF_INFO'

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

export function handleAge(age){
  return {
    type: HANDLE_AGE,
    payload: age
  }
}

export function handleHeight(height){
  return {
    type: HANDLE_HEIGHT,
    payload: height
  }
}

export function handleWeight(weight){
  return {
    type: HANDLE_WEIGHT,
    payload: weight
  }
}



export function editAge(age, id){
  let userAge = axios
  .put(`/user/update_age/${id}`, {age})
  .then((res) => {
    // console.log(res.data, 'editAgeFN')
    this.getUser()
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
    console.log('editHeightfn hit')
    this.getUser()
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
    // console.log(res.data)
    this.getUser()
    return res.data
  })
  return {
    type: EDIT_WEIGHT,
    payload: userWeight
  }
}

// export function editProfInfo(age, height, weight, id){
//   let profInfo = axios
//     .put(`/user/update/${id}`, {age, height, weight})
//     .then((res) => {
//       console.log(res.data)
//       return res.data
//     })
//   return {
//     action: EDIT_PROF_INFO,
//     payload: profInfo
//   }
// }

// export function getProfInfo(){
//   console.log('getprof function hit')
//   let profData = axios
//     .get('/user')
//     .then((res) => {
//       console.log(res.data)
//       return res.data
//     })
//     return {
//       type: GET_PROF_INFO,
//       payload: profData
//     }
// }

export default function userReducer(state=initialState, action){
  switch(action.type){
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {user: action.payload})
    case EDIT_AGE + '_FULFILLED':
      return Object.assign({}, state, {user_age: action.payload})
    case EDIT_HEIGHT + '_FULFILLED':
      return Object.assign({}, state, {user_height: action.payload})
    case EDIT_WEIGHT + '_FULFILLED':
      return Object.assign({}, state, {user_weight: action.payload})
    case HANDLE_AGE:
      return Object.assign({}, state, {ageInput: action.payload})
    case HANDLE_HEIGHT:
      return Object.assign({}, state, {heightInput: action.payload})
    case HANDLE_WEIGHT:
      return Object.assign({}, state, {weightInput: action.payload})
    default:
      return state
  }
}