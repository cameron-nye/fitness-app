import React from 'react'
import ProfDisplay from '../ProfDisplay/ProfDisplay'
import Chart from '../Chart/Chart'
import Goals from '../Goals/Goals'
import './Profile.css'

function Profile(){
  return (
    <div className='profMain'>
      <ProfDisplay />
      <div className='profRight'>
        <Goals />
        <Chart />
      </div>
    </div>
  )
}

export default Profile