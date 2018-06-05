import React, {Component} from 'react'
import {Bar, Doughnut} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {getWorkouts} from '../../redux/workoutReducer'
import './Chart.css'

class Chart extends Component{
  constructor(){
    super()
    this.state = {
      toggleGraph: false
    }
  }

  componentDidMount(){
    this.props.getWorkouts()
  }

  render(){
    // console.log(this.props.workouts)

    // CHART DATA FOR ALL WORKOUT TYPES TOGETHER

    // data: this.props.workouts.map((workout) => workout.time_spent),

    // BAR GRAPH DATA

    let cardio = this.props.workouts.filter((workout) => workout.workout_type === 'Cardio')
    
    let weightTraining = this.props.workouts.filter((workout) => workout.workout_type === 'Weight Training')
    let yoga = this.props.workouts.filter((workout) => workout.workout_type === 'Yoga/Stretching')
    let teamSports = this.props.workouts.filter((workout) => workout.workout_type === 'Team Sports')
    let resistance = this.props.workouts.filter((workout) => workout.workout_type === 'Resistance')
    let corrective = this.props.workouts.filter((workout) => workout.workout_type === 'Corrective')
    
    // PIE CHART DATA
  


      // let workoutTotals = this.props.workouts.reduce((total, workout) => {
        
      //   if(workout.workout_type === 'Cardio'){
          
      //   } else if(workout.workout_type === 'Weight Training'){

      //   } else if(workout.workout_type === 'Yoga/Stretching'){

      //   } else if(workout.workout_type === 'Team Sports'){

      //   } else if(workout.workout_type === 'Resistance'){

      //   } else if(workout.workout_type === 'Corrective'){

      //   }
      //   return total
      // }, [])

      // let workoutTotals = this.props.workouts.map((workout, i) => {
      //   let total
      //   let totalArr = []
      //   if(workout[i].workout_type === 'Cardio'){
      //     totalArr.push(total += workout[i].time_spent)
      //   } 
      //   if(workout.workout_type === 'Weight Training'){

      //   } 
      //   if(workout.workout_type === 'Yoga/Stretching'){

      //   } 
      //   if(workout.workout_type === 'Team Sports'){

      //   } 
      //   if(workout.workout_type === 'Resistance'){

      //   } 
      //   if(workout.workout_type === 'Corrective'){

      //   }
      //   return total
      // })

      // console.log(workoutTotals);

      let cardioGroup = this.props.workouts.reduce((total, workout) => {
        if(workout.workout_type === 'Cardio'){
          total += workout.time_spent
        }
        return total
      }, 0)
      let weightGroup = this.props.workouts.reduce((total, workout) => {
        if(workout.workout_type === 'Weight Training'){
          total += workout.time_spent
        }
        return total
      }, 0)
      let yogaGroup = this.props.workouts.reduce((total, workout) => {
        if(workout.workout_type === 'Yoga/Stretching'){
          total += workout.time_spent
        }
        return total
      }, 0)
      let teamGroup = this.props.workouts.reduce((total, workout) => {
        if(workout.workout_type === 'Team Sports'){
          total += workout.time_spent
        }
        return total
      }, 0)
      let correctiveGroup = this.props.workouts.reduce((total, workout) => {
        if(workout.workout_type === 'Corrective'){
          total += workout.time_spent
        }
        return total
      }, 0)
      let resistanceGroup = this.props.workouts.reduce((total, workout) => {
        if(workout.workout_type === 'Resistance'){
          total += workout.time_spent
        }
        return total
      }, 0)
      
      let doughnutTotals = [cardioGroup, weightGroup, yogaGroup, teamGroup, resistanceGroup, correctiveGroup]
      // console.log(doughnutTotals)
      
      
      let barData = {
        labels: [1,2,3,14,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,26,27,28,29,30,31],
        // labels: this.props.workouts.map(workouts => workouts.date),
      datasets: [
        {
          label: 'Workouts',
          data: this.props.workouts.map((workout) => workout.time_spent),
          backgroundColor: this.props.workouts.map((workout) => {
            if(workout.workout_type === 'Cardio'){
              return (
                '#a250ff'
              )
            }
            if(workout.workout_type === 'Weight Training'){
              return (
                '#1e90ff'
              )
            }
            if(workout.workout_type === 'Yoga/Stretching'){
              return (
                '#5effa6'
              )
            }
            if(workout.workout_type === 'Team Sports'){
              return (
                '#ffac3e'
              )
            }
            if(workout.workout_type === 'Resistance'){
              return (
                '#ff3e4e'
              )
            }
            if(workout.workout_type === 'Corrective'){
              return (
                '#fffc3e'
              )
            }
          })
        }
        // {
        //   label: 'Cardio',
        //   // data: cardio.map((workout) => workout.time_spent),
        //   data: cardio.map(workout => {
        //     return {
        //       x: workout.date,
        //       y: workout.time_spent
        //     }
        //   }),
        //   backgroundColor: '#a250ff',
        //   borderColor: 'white',
        // },
        // {
        //   label: 'Weight Training',
        //   data: weightTraining.map((workout) => {
        //     return {
        //       x: workout.date,
        //       y: workout.time_spent
        //     }
        //   }),
        //   backgroundColor: '#1e90ff',
        //   borderColor: 'white'
        // },
        // {
        //   label: 'Yoga/Stretching',
        //   data: yoga.map((workout) => {
        //     return {
        //       x: workout.date,
        //       y: workout.time_spent
        //     }
        //   }),
        //   backgroundColor: '#5effa6',
        //   borderColor: 'white'
        // },
        // {
        //   label: 'Team Sports',
        //   data: teamSports.map((workout) => {
        //     return {
        //       x: workout.date,
        //       y: workout.time_spent
        //     }
        //   }),
        //   backgroundColor: '#ffac3e',
        //   borderColor: 'white'
        // },
        // {
        //   label: 'Resistance',
        //   data: resistance.map((workout) => {
        //     return {
        //       x: workout.date,
        //       y: workout.time_spent
        //     }
        //   }),
        //   backgroundColor: '#ff3e4e',
        //   borderColor: 'white'
        // },
        // {
        //   label: 'Corrective',
        //   data: corrective.map((workout) => {
        //     return {
        //       x: workout.date,
        //       y: workout.time_spent
        //     }
        //   }),
        //   backgroundColor: '#fffc3e',
        //   borderColor: 'white'
        // },
      ]
    }
    let doughnutData = {
      labels: ['Cardio', 'Weight Training', 'Yoga/Stretching', 'Team Sports', 'Resistance', 'Corrective'],
      options: {

      },
      datasets: [
        {
          data: doughnutTotals,
          backgroundColor: ['#a250ff', '#1e90ff', '#5effa6', '#ffac3e', '#ff3e4e', '#fffc3e'],
          borderColor: 'white',

        },
      ]
    }
    return(
      <div className='chartCont'>
        <div className="dataHeader">
          Data Trackers
        </div>
        <hr/>
        {
          this.state.toggleGraph ?
          <div>
            <div className="doughnutHeader">Totals by Workout Type</div>
            <Doughnut data={doughnutData}/>
            <hr/>
            <button className='graphB' onClick={() => 
              this.setState({
                toggleGraph: !this.state.toggleGraph
              })}
              >Show Bar Chart</button>
          </div>
        :
        <div>
          <div className="barHeader">Workouts by Day</div>
          <Bar data={barData}/>
          <hr/>
          <button className='graphB' onClick={() => 
            this.setState({
              toggleGraph: !this.state.toggleGraph
          })}
          >Show Pie Chart</button>
        </div>
        }
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.userReducer.user,
    workouts: state.workoutReducer.workouts
  }
}

export default connect(mapStateToProps, {getWorkouts})(Chart)