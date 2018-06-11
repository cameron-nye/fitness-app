import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {goalInput, clearInput, getGoals} from '../../redux/goalReducer'
import GoalEntry from '../../components/GoalEntry/GoalEntry'
import './Goals.css'

class Goals extends Component{
  constructor(){
    super()
    this.state = {
      // input: ''
      // goals: []
    }
    this.submitGoal = this.submitGoal.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  componentDidMount(){
    this.props.getGoals()
  }

  submitGoal(){
    // console.log(this.props.goal)
    let {goal} = this.props
    axios.post('/goals/new', {goal})
      .then((res) => {
        this.props.getGoals()
        // this.props.clearInput()
      })  
  }

  deleteGoal(id){
    axios.delete(`/goals/delete/${id}`, {id})
      .then(() => {
        this.props.getGoals()
      })
  }

  clearInput(){
    this.setState({input: ''})
  }

  render(){
    // console.log(this.props.goal)
    let goalsDisplay = this.props.goals.map((goal, i) => {
      return (
        <div key={goal + i}><GoalEntry goal={goal.goal}
                                    id={goal.id}
                                    deleteMethod={this.deleteGoal.bind(this)}
                                    getGoals={this.props.getGoals}
                                    submit={this.submitGoal.bind(this)} />
        </div>
      )
    })
    return(
      <div className='goalCont'>
        <div className="goalHeader">
          Goals
        </div>
        <hr/>
        <div className="display">
          {goalsDisplay}
        </div>
        <div className="entry">
          <input type="text"
                value={this.props.goal}
                className='input'
                placeholder='New Goal'
                onChange={(e) => this.props.goalInput(e.target.value)}/>
          <button className='Subbutton' onClick={() => {
            this.submitGoal()
            this.props.clearInput()
          }
        }>Add Goal</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    goal: state.goalReducer.goal,
    goals: state.goalReducer.goals,
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, {goalInput, clearInput, getGoals})(Goals)