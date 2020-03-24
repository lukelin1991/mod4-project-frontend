import React from 'react';
import SignContainer from './components/SignContainer.js'
import LogContainer from './components/LogContainer.js'
import 'semantic-ui-css/semantic.min.css'

import './App.css';

class App extends React.Component {
  state={
    token:""
  }
  updateToken=(token)=>{
    this.setState({
      token:token
    })
  }
  render(){
  return (
      <div className="App">
      <SignContainer  updateToken={this.updateToken}/>
      <LogContainer  updateToken={this.updateToken}/>
      </div>
    );
  }
}

export default App;
