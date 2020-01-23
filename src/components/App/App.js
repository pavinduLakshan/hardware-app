import React from 'react';
import Routes from '../../routes'
import axios from 'axios'

axios.defaults.baseURL = "https://hardware-back.herokuapp.com"

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
