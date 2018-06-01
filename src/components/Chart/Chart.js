import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import './Chart.css'

class Chart extends Component{

  render(){
    let data = {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,26,27,28,29,30,31],
      datasets: [
        {
          label: 'Weight',
          data: []
        },
        {
          label: 'Exercise',
          data: []
        }
      ]
    }
    return(
      <div className='chartCont'>
        <div className="dataHeader">
          Data Trackers
        </div>
        <hr/>
        <Line data={data}/>
      </div>
    )
  }
}

export default Chart