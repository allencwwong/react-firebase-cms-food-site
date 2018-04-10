import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { database } from './js/firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount(){
    console.log('I DID MOUNT!');
    database.ref().on('value', () =>{
      console.log('THE DATA HANGED!');
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
