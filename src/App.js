import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Routes from './routes'
import './reset.css'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>
        {Routes}
      </div>
    );
  }
}

export default App;
