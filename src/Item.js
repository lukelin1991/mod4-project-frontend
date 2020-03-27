import React from 'react'

class Item extends React.Component{
    state={
        token:localStorage.getItem('jwt'),
        items:[]
    }
    async componentDidMount(){
        let response = await fetch('http://localhost:3000/items',{
                method: 'GET',
                headers: {
                Authorization: `Bearer ${this.state.token}`
                }
              })
           
            let items = await response.json()
            console.log(items)
            this.setState({
                items:items
            })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default Item