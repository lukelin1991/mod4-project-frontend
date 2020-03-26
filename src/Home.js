import React from 'react'
import './home.css';
import HomeContainer from './components/HomeContainer.js'

let token = localStorage.getItem('jwt')

class Home extends React.Component{
    state={
        token:token
       
    }

    

    
    render(){
        return(
            <div>
               <HomeContainer/>
            </div>
        )
    }
}

export default Home