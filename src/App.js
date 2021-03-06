import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import MyContext from './components/MyContext';

class App extends Component {

  state = {
    user: {
      name: 'Lisa',
      age: 8
    }
  }

  render() {
    return (
      <MyContext.Provider value={this.state.user}>
        <Profile info={this.state.user}/>
      </MyContext.Provider>
    );
  }
}

export default App;
