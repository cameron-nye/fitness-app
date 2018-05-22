import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false
    };
    this.showNavFn = this.showNavFn.bind(this);
  }

  showNavFn() {
    this.setState({
      showNav: !this.state.showNav
    });
  }
  render() {
    
    return (
      <div className="nav">
        <Link to='/'><div className="title">Fitness App</div></Link>
        <div className="navButtons">
          <img
            className="menuButton"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/880223-200.png"
            alt=""
            onClick={this.showNavFn}
          />
          <ul>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/services'><li>Services</li></Link>
            <a href={process.env.REACT_APP_LOGIN}><li>Login</li></a> 
          </ul>
        </div>
      </div>

    );
  }
}

export default Nav;
