import React from 'react'
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import '../Navbar.css'


// let logged = localStorage.getItem('jwt')

/* add the navbar component */
class Navbar extends React.Component{
  state={
    token: localStorage.getItem('jwt')
  }

  logout =()=>{
    localStorage.removeItem('jwt')
    this.setState({
      token:null
    })
  }

  conditionalNav=()=>{
    
    return this.state.token === null || this.state.token ==="undefined"?

    <Menu>
      
    <Menu.Item link>
      <NavLink
        to="/"
        exact>
        Home
      </NavLink>
    </Menu.Item>
    
    <Menu.Item link position="right">
      <NavLink
        to="/login"
        exact>
        Login
      </NavLink>
    </Menu.Item>

    <Menu.Item link > 
      <NavLink
        to="/signup"
        exact>
        Signup
      </NavLink>
    </Menu.Item>
    
    </Menu>

  :
    <Menu>
    <Menu.Item link>
      <NavLink
        to="/"
        exact>
        Home
      </NavLink>
    </Menu.Item>

    <Menu.Item position="right">
      Gold: {this.user.gold}
    </Menu.Item>

    {/* <Menu.Item link >
      <NavLink
        to="/items"
        exact>
        Items
      </NavLink>
    </Menu.Item> */}

    <Menu.Item link onClick={this.logout} position="right">
      Logout
    </Menu.Item>
    </Menu>}
  

  render(){

    let url = "http://localhost:3000"

    const fetchContent = () => {
      fetch(url)
      .then(r => r.json())
      .then(data => {
        return getGold(data)
      })
    }

    const getGold = (data) => {
      console.log(data)
    }


  return(
  <div>
    {this.conditionalNav()}
  </div>
  )}
}


  export default Navbar