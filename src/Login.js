import React from 'react';
import LogContainer from './components/LogContainer.js'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class Log extends React.Component {
  state={
    token:localStorage.getItem('jwt')
  }
  updateToken=()=>{
    this.setState({
      token:localStorage.getItem('jwt')
    })
  }
  render(){
  return (
      <div className="App">
      <LogContainer  token={this.state.token} updateToken={this.updateToken}/>
      </div>
    );
  }
}

export default Log;
