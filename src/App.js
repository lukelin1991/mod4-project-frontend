import React, { Component,useEffect, useState } from 'react';
// import { connect }

import DrawWorld from './components/DrawWorld';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
      <DrawWorld />
    </div>
    );

  }
}

export default App;
