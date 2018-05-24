import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import './ProfDisplay.css'

class ProfDisplay extends Component{

  componentDidMount(){
    this.props.getUser()
  }


  render(){
    let {user_name, picture} = this.props.user
    return (
      <div className='profCont'>
        {/* <div className="profPic"> */}
          <img className='profPic' src= {picture} alt=""/>
        {/* </div> */}
        <div className="profInfo">
          <div className="profGroup">
            <div className='profItem'>Name: {user_name} </div>
            <div className='profItem'>Age: </div>
            <div className='profItem'>Height: </div>
            <div className='profItem'>Weight: </div>
          </div>
        <button className='editButton'>Edit Profile</button>
        <button className='editButton'>Add Workout Data</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser})(ProfDisplay)