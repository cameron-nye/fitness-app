import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
      showProf: false
    };
    this.showNavFn = this.showNavFn.bind(this);
    this.showProfFn = this.showProfFn.bind(this);
  }

  showNavFn() {
    this.setState({
      showNav: !this.state.showNav
    });
  }

  showProfFn() {
    this.setState({
      showProf: !this.state.showProf
    });
  }
  render() {
    // console.log(this.props)
    return (
      <div className="nav">
        <Link to="/">
          <div className="title">Fitness App</div>
        </Link>
        <div className="navButtons">
          <img
            className="menuButton"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/880223-200.png"
            alt=""
            onClick={this.showNavFn}
          />
          <ul>
            <Link to="/blog">
              <li className="links">Blog</li>
            </Link>
            <Link to="/services">
              <li className="links">Services</li>
            </Link>
            {!this.props.user.id ? <a href={process.env.REACT_APP_LOGIN} >
              <li className="links">Login</li></a> : <Link to='/profile' ><li className='links'>Profile</li></Link>}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Nav);
