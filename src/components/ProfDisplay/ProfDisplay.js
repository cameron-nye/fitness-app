import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../redux/userReducer'
import {editAge, editHeight, editWeight} from '../../redux/userReducer'
import {handleDate, handleType, handleTime, submitWorkout, getWorkouts} from '../../redux/workoutReducer'
import Button from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import DayPickerInput from 'react-day-picker/DayPickerInput'
import './ProfDisplay.css'



class ProfDisplay extends Component{
  constructor(){
    super()
    this.state = {
      toggleEdit: false,
      open: false,
      ageInput: '', 
      heightInput: '',
      weightInput: '',
      // type: '',
      // date: ''
    }
    this.handleAgeInput = this.handleAgeInput.bind(this)
    this.handleHeightInput = this.handleHeightInput.bind(this)
    this.handleWeightInput = this.handleWeightInput.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    // this.handleType = this.handleType.bind(this)
  }


  // handleType(e){
  //   this.setState({
  //     type: e.target.value
  //   })
  // }

  // handleDate(e){
  //   this.setState({
  //       date: e.target.value
  //   })
  // }

  componentDidMount(){
    this.props.getUser()
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAgeInput(e){
    this.setState({
      ageInput: e.target.value
    })
  }

  handleHeightInput(e){
    this.setState({
      heightInput: e.target.value
    })
  }

  handleWeightInput(e){
    this.setState({
      weightInput: e.target.value
    })
  }


  render(){
    let {user_name, picture, user_age, user_height, user_weight} = this.props.user
    let {workoutDate, workoutType, workoutTime} =  this.props
    // console.log(this.props);
    // console.log(this.state.toggleWorkout);
    
    return (
      <div className='profCont'>
        <img className='profPic' src= {picture} alt=""/>
        <div className="profInfo">
          <div className='profItem'>Name: {user_name} </div>
          {
            this.state.toggleEdit ?
          <div className="profGroup">
            <div className='profItem'>Age: <input 
              type="text"                                                           
              className='editProfInput'
              placeholder={user_age} 
              onChange={this.handleAgeInput}
              />
            </div>
            <div className='profItem'>Height: <input 
              type="text" 
              className='editProfInput' 
              placeholder={user_height} 
              onChange={this.handleHeightInput}/>
            </div>
            <div className='profItem'>Weight: <input 
              type="text" 
              className='editProfInput' 
              onChange={this.handleWeightInput} 
              placeholder={user_weight}/>
            </div>
            <div className="buttonGroup">
              <button className='saveB'onClick={() => {
                this.setState({toggleEdit: false})
                this.props.editAge(this.state.ageInput, this.props.user.id)
                this.props.editHeight(this.state.heightInput, this.props.user.id)
                this.props.editWeight(this.state.weightInput, this.props.user.id)
              }
            }>Save</button>
              <button className='cancelB' onClick={() => this.setState({toggleEdit: false})}>Cancel</button>
            </div>
          </div>
          :
          <div className="profGroup">
            <div className='profItem'>Age: {user_age}</div>
            <div className='profItem'>Height: {user_height} </div>
            <div className='profItem'>Weight: {user_weight}</div>
            <button className='editButton'
                    onClick={() => {
                      this.setState({
                        toggleEdit: !this.state.toggleEdit
                      })}}
                    >Edit Profile</button> 
            <button className='editButton' onClick={this.handleClickOpen}>Add Workout Data</button>
          </div>
          }

        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Add Workout Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the date you worked out, the type of workout you performed, and the time spent doing it
            </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                placeholder=''
                id="date"
                label="Workout Date"
                type="date"
                // value = {this.props.workoutType}
                onChange = {(e) => this.props.handleDate(e.target.value)}
                fullWidth
                />
                {/* <div> */}
                {/* <DayPickerInput
                  inputProps = {{ style: {
                    width: '100%',
                    fontSize: '16px',
                    minHeight: '38px',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}}
                  />
                </div> */}
              <FormControl fullWidth>
                <InputLabel htmlFor="role-simple">Type</InputLabel>
                <Select
                  onChange={(e) => this.props.handleType(e.target.value)}
                  value={this.props.workoutType}
                  inputProps={{
                  name: 'Workout Type',
                  }}
                  fullWidth
                  >
                  <MenuItem value="Cardio">Cardio</MenuItem>
                  <MenuItem value="Weight Training">Weight Training</MenuItem>
                  <MenuItem value="Yoga/Stretching">Yoga/Stretching</MenuItem>
                  <MenuItem value="Team Sports">Team Sports</MenuItem>
                  <MenuItem value="Corrective">Corrective</MenuItem>
                  <MenuItem value="Resistance">Resistance</MenuItem>
                </Select>
              </FormControl>
              <TextField
                // autoFocus
                margin="dense"
                value={this.props.workoutTime}
                onChange={(e) => this.props.handleTime(e.target.value)}
                id="text"
                label="Time Spent (in minutes)"
                type="text"
                fullWidth
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {
              this.props.submitWorkout(workoutDate, workoutType, workoutTime)
              this.handleClose()
              }
            } 
              color="primary">
              Submit
            </Button>
          </DialogActions>


        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.userReducer.user,
    workoutDate: state.workoutReducer.workoutDate,
    workoutType: state.workoutReducer.workoutType,
    workoutTime: state.workoutReducer.workoutTime
  }
}

export default connect(mapStateToProps, {getUser, editAge, editHeight, editWeight, handleDate, handleType, handleTime, submitWorkout, getWorkouts})(ProfDisplay)