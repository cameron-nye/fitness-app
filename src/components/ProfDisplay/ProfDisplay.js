import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../redux/userReducer'
import {editAge, editHeight, editWeight, handleAge, handleHeight, handleWeight} from '../../redux/userReducer'
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

const style = {
  cursor:'pointer',
  backgroundColor: 'lightgray',
}

class ProfDisplay extends Component{
  constructor(){
    super()
    this.state = {
      toggleEdit: false,
      open: false,
      profOpen: false,
      // ageInput: '', 
      // heightInput: '',
      // weightInput: '',
    }
    // this.handleAgeInput = this.handleAgeInput.bind(this)
    // this.handleHeightInput = this.handleHeightInput.bind(this)
    // this.handleWeightInput = this.handleWeightInput.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount(){
    this.props.getUser()
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClickProfOpen = () => {
    this.setState({ profOpen: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleProfClose = () => {
    this.setState({ profOpen: false });
  };


  render(){
    let {user_name, picture, user_age, user_height, user_weight} = this.props.user
    let {workoutDate, workoutType, workoutTime} =  this.props
    // console.log(this.props);
    // console.log(this.state.toggleWorkout);
    console.log(this.state.toggleEdit)
    
    return (
      <div className='profCont'>
        <img className='profPic' src= {picture} alt=""/>
        <div className="profInfo">
          <div className='nameItem'>Name: {user_name} </div>
          {
            this.state.toggleEdit ?
          <div className="profGroup">
            <div className='profItem'>Age: <input 
              type="text"                                                           
              className='editProfInput'
              placeholder={user_age} 
              onChange={(e) => {
                this.props.handleAge(e.target.value)
              }}
              />
            </div>
            <div className='profItem'>Height: <input 
              type="text" 
              className='editProfInput' 
              placeholder={user_height} 
              onChange={(e) => {
                this.props.handleHeight(e.target.value)
              }}/>
            </div>
            <div className='profItem'>Weight: <input 
              type="text" 
              className='editProfInput' 
              onChange={(e) => {
                this.props.handleWeight(e.target.value)
              }} 
              placeholder={user_weight}/>
            </div>
            <div className="buttonGroup">
              <button className='saveB'onClick={() => {
                this.setState({toggleEdit: false})
                this.props.editAge(this.props.ageInput, this.props.user.id)
                this.props.editHeight(this.props.heightInput, this.props.user.id)
                this.props.editWeight(this.props.weightInput, this.props.user.id)
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
                    onClick={this.handleClickProfOpen}
                    >Edit Profile</button> 
            
            {/* ORIGINAL WORKING */}

            {/* <button className='editButton'
                    onClick={() => {
                      this.setState({
                        toggleEdit: !this.state.toggleEdit
                      })}}
                    >Edit Profile</button>  */}
            <button className='editButton' onClick={this.handleClickOpen}>Add Workout Data</button>
          </div>
          }

        {/* PROF EDIT MODAL */}

        <div>
        <Dialog
          open={this.state.profOpen}
          onClose={this.handleProfClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Edit Profile Information</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              Please enter the date you worked out, the type of workout you performed, and the time spent doing it
            </DialogContentText> */}
              <TextField
                autoFocus
                margin="dense"
                placeholder={user_age}
                id="Age"
                label="Age"
                type="Text"
                // value = {user_age}
                onChange={(e) => {
                  this.props.handleAge(e.target.value)
                }}
                fullWidth
                />
              <TextField
                margin="dense"
                placeholder={user_height}
                id="Height"
                label="Height"
                type="Text"
                // value = {this.props.workoutType}
                onChange={(e) => {
                  this.props.handleHeight(e.target.value)
                }}
                />

              <TextField
                // autoFocus
                margin="dense"
                // value={this.props.workoutTime}
                placeholder={user_weight}
                onChange={(e) => {
                  this.props.handleWeight(e.target.value)
                }}
                id="Weight"
                label="Weight"
                type="text"
                fullWidth
                />
          </DialogContent>
          <DialogActions>

            <Button onClick={this.handleProfClose} style={style}color="primary">
              Cancel
            </Button>
            <Button style={style} onClick={() => {
                // this.setState({toggleEdit: false})
                this.props.editAge(this.props.ageInput, this.props.user.id)
                this.props.editHeight(this.props.heightInput, this.props.user.id)
                this.props.editWeight(this.props.weightInput, this.props.user.id)
                this.handleProfClose()
              }
            } 
              color="primary">
              <div className="submit">
                Submit
              </div>
            </Button>
          </DialogActions>
        </Dialog>
        </div>




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

            <Button style={style}onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button style={style}onClick={() => {
              this.props.submitWorkout(workoutDate, workoutType, workoutTime)
              this.handleClose()
              }
            } 
              color="primary">
              <div className="submit">
                Submit
              </div>
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
    user_age: state.userReducer.user_age,
    user_height: state.userReducer.user_height,
    user_weight: state.userReducer.user_weight,
    workoutDate: state.workoutReducer.workoutDate,
    workoutType: state.workoutReducer.workoutType,
    workoutTime: state.workoutReducer.workoutTime,
    ageInput: state.userReducer.ageInput,
    heightInput: state.userReducer.heightInput,
    weightInput: state.userReducer.weightInput
  }
}

export default connect(mapStateToProps, {getUser, editAge, editHeight, editWeight, handleDate, handleType, handleTime, submitWorkout, getWorkouts, handleAge, handleHeight, handleWeight})(ProfDisplay)