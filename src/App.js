import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { database } from './js/firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // when component mount trigger
  componentDidMount(){
    console.log('I DID MOUNT!');
    this.dataRef = database.ref('dir1/dir2/dir3')

    // using firebae function database check db node aka ref
    database.ref().on('value', (snapshot) =>{
      this.setState({
        data: snapshot.val()
      })
      console.log('THE DATA HANGED!', snapshot.val());
    });
  }


  // on change store data to newData var
  handleChange(event){
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { JSON.stringify(this.state.data,null,2)}
        </p>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
