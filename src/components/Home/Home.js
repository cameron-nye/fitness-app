import React, {Component} from "react";
import Button from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {toast} from 'react-toastify'
import "./Home.css";
import headshot from "../../pictures/headshot.jpg";

class Home extends Component {
  constructor(){
    super()
    this.state = {
      open: false,
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubject = this.handleSubject.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handleMessage(e){
    this.setState({
      message: e.target.value
    })
  }

  handleSubject(e){
    this.setState({
      subject: e.target.value
    })
  }

  handleSubmit(){
    let {name, email, message, subject} = this.state
    axios.post('/email', {senderName: name, senderEmail: email, message, subject })
      .then(() => {
        toast.alert('Your email has been sent!')
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
  }

  render(){
    // console.log(this.state)
    return (
      <div className="main">
      <div className="mainSplash">
        <div className="bio">
          <img className="headshot" src={headshot} alt="" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div className="rightSplash">
          <img
            className="barbell"
            src="https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png?1509471214"
            alt=""
            />
          <img
            className="barbell"
            src="https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png?1509471214"
            alt=""
            />
          <div className="certs">
            <div className='certTitle'>Certifications:</div>
            <hr/>
            <li className="certItem">National Academy of Sports Medicine</li>
            <li className="certItem">American College of Sports Medicine</li>
            <li className="certItem">National Exercise and Sports Training Association</li>
          </div>
        </div>
      </div>
      <div className="contact">
        <div>Phone: (123)456-7890</div>
        <button className='contactB' onClick={this.handleClickOpen}>Email Me</button>
      </div>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Email Me</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Questions? Fill out the form below!
            </DialogContentText>

                <TextField
                  autoFocus
                  margin="dense"
                  placeholder=''
                  id="name"
                  label="Your Name"
                  type="text"
                  value = {this.state.name}
                  onChange = {this.handleName}
                  fullWidth
                  />

              <TextField
                // autoFocus
                margin="dense"
                placeholder=''
                id="email"
                label="Email Address"
                type="email"
                value = {this.state.email}
                onChange = {this.handleEmail}
                fullWidth
                />

              <TextField
                // autoFocus
                margin="dense"
                placeholder=''
                id="subject"
                label="Subject"
                type="text"
                value = {this.state.subject}
                onChange = {this.handleSubject}
                fullWidth
                />

              <TextField
                // autoFocus
                margin="dense"
                value={this.state.message}
                onChange={this.handleMessage}
                id="text"
                label="Message"
                type="text"
                fullWidth
                />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {
              this.handleSubmit()
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
  );
  
  }
}

export default Home;
