import React from 'react'
import HeroContainer from './components/HeroContainer'

class Hero extends React.Component{
    state={
        token:localStorage.getItem('jwt'),
        heros:[]
    }
    async componentDidMount(){
        let response = await fetch('http://localhost:3000/heros',{
                method: 'GET',
                headers: {
                Authorization: `Bearer ${this.state.token}`
                }
              })
           
            let heros = await response.json()
            console.log(heros)
            this.setState({
                heros:heros
            })
    }


    render(){
        return(
            <div>
                <div className="item-container">
                <HeroContainer heros={this.state.heros}/>
                </div>
            </div>
        )
    }
}
export default Hero