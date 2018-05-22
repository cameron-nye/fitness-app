import React from 'react'
import ProfDisplay from '../ProfDisplay/ProfDisplay'
import Chart from '../Chart/Chart'
import Goals from '../Goals/Goals'

function Profile(){
  return (
    <div>
      <h1>Profile</h1>
      <ProfDisplay />
      <Goals />
      <Chart />
    </div>
  )
}

export default Profile