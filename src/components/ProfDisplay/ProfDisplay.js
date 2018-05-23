import React, {Component} from 'react'
import './ProfDisplay.css'

class ProfDisplay extends Component{

  render(){
    return (
      <div className='profCont'>
        <div className="profPic">
          <img className='profPic' src="" alt=""/>
        </div>
        <div className="profInfo">
          <div className="profGroup">
            <div className='profItem'>Name: </div>
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

export default ProfDisplay