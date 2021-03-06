import React from 'react'
import './home.css';
import App from './App'
import HomeContainer from './components/HomeContainer.js'
import { Menu } from 'semantic-ui-react'
import {NavLink } from 'react-router-dom'

let token = localStorage.getItem('jwt')

class Home extends React.Component{
    state={
        token:token
       
    }
    
    render(){
        return(
            <div>
                {
                    this.state.token === null || this.state.token ==="undefined"?
               <HomeContainer/>
               :
               <App/>}
            <Menu vertical className={"home-menu"}>
                <Menu.Item link >
                    <NavLink to="/shops"exact>Shop</NavLink>
                </Menu.Item>
                <Menu.Item link >
                    <NavLink to="/hero" exact>Heroes</NavLink>
                    
                </Menu.Item>
            </Menu>
               
            </div>
        )
    }
}

export default Home