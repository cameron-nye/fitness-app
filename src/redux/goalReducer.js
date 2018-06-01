import axios from 'axios'

const initialState = {
  // user: {},
  goal: '',
  goals: [], 
  
}

// const GET_USER = 'GET_USER'
const GOAL_INPUT = 'GOAL_INPUT'
const CLEAR_INPUT = 'CLEAR_INPUT'
const GET_GOALS = 'GET_GOALS'
// const EDIT_GOAL = 'EDIT_GOAL'



// export function getUser(){
//   let userData = axios.get('/auth/me')
//                   .then((res) => {
//                     return res.data
//                   })
//   return {
//     type: GET_USER,
//     payload: userData
//   }
// }

export function goalInput(goal){
  return {
    type: GOAL_INPUT,
    payload: goal
  }
}

export function clearInput(){
  return {
    type: CLEAR_INPUT,
    payload: initialState.goal
  }
}

export function getGoals(){
  let userGoals = axios.get('/goals')
                        .then((res) => {
                          // console.log(res.data)
                          return res.data
                        })
  return {
    type: GET_GOALS,
    payload: userGoals
  }
}

export function editGoal(goal, id){
  // console.log(goal, id)
  let userGoals = axios
    .put(`/goals/update/${id}`, {goal})
    .then((res) => {
      // console.log(res.data)
      return res.data
    })
    .catch()
  return {
    type: GET_GOALS,
    payload: userGoals
  }
}



export default function goalReducer (state=initialState, action){
  switch(action.type){
    // case GET_USER + '_FULFILLED':
    //   return Object.assign({}, state, {user: action.payload})
    case GOAL_INPUT:
      return Object.assign({}, state, {goal: action.payload})
    case CLEAR_INPUT:
      return Object.assign({}, state, {goal: action.payload})
    case GET_GOALS + '_FULFILLED':
      return Object.assign({}, state, {goals: action.payload})
    default:
      return state
  }
}