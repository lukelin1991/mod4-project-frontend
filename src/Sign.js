import React from 'react';
import SignContainer from './components/SignContainer.js'
import 'semantic-ui-css/semantic.min.css'

import './App.css';

class Sign extends React.Component {
  state={
    token:""
  }
  updateToken=()=>{
    this.setState({
      token:localStorage.getItem('jwt')
    })
  }
  render(){
  return (
      <div className="App">
      <SignContainer  updateToken={this.updateToken}/>
      </div>
    );
  }
}

export default Sign;
