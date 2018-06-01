import React, {Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {goalInput, editGoal} from '../../redux/goalReducer'
import './GoalEntry.css'

class GoalEntry extends Component{
  constructor(){
    super()
    this.state = {
      editFlag: false,
      input: ''
    }
    this.editFlagFn = this.editFlagFn.bind(this)
    // this.editSubmit = this.editSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    this.setState({
      input: e.target.value
    })
  }

  editFlagFn(){
    this.setState({
      editFlag: !this.state.editFlag
    })
  }

  // editSubmit(){
  //   let goal = this.state.input
  //   // let {id} = this.props
  //   axios.put('/goals/update', {goal})
  //     .then((res) => {
  //       // this.props.getGoals()
  //     }
  //   )
  // }

  render(){
    // console.log(this.props);
    return(
      <div className='entryMain' >
        {
          this.state.editFlag ? 
          <input type="text"
                  placeholder={this.props.goal}
                  className='editInput'
                  onChange={this.handleInput}
                  autoFocus/> 
        :
          // IF I WANT A CHECKBOX
          // <div className='entry'>
          // <input type="checkbox"/> {this.props.goal}
          // </div>
          this.props.goal
        }

        {
          this.state.editFlag ? 
          <div className='buttonGroup'>
            <button className='button'
                    onClick={() => {
                      this.props.editGoal(this.state.input, this.props.id)
                      this.setState({editFlag: false})
                
                    }
                  }>Save</button> 
            <button className='deleteB' 
                    onClick={() => this.props.deleteMethod(this.props.id)}>Delete</button>
            <button className='cancelButton'onClick={() => this.setState({editFlag: false})}>Cancel</button>
          </div>
        : 
            <button className='button'
                    onClick={() => this.editFlagFn()}>Edit</button>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    goals: state.goalReducer.goals
  }
}

export default connect(mapStateToProps, {goalInput, editGoal})(GoalEntry)