import React from '../node_modules/react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form'

const APP_ID=process.env.REACT_APP_EDAMAM_APP_ID;
const API_KEY=process.env.REACT_APP_EDAMAM_API;

// curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Recipe Finder</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
