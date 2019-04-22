import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let googleApi = process.env.REACT_APP_GOOGLE_MAP_API;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Google Maps with React</h1>
        </header>
        <main>
          <h1>Google Maps</h1>
        </main>
      </div>
    );
  }
}

export default App;
