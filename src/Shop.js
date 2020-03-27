import React from 'react'
import ItemContainer from './components/ShopContainer'

class Item extends React.Component{
    state={
        token:localStorage.getItem('jwt'),
        items:[]
    }
    async componentDidMount(){
        let response = await fetch('http://localhost:3000/shops',{
                method: 'GET',
                headers: {
                Authorization: `Bearer ${this.state.token}`
                }
              })
           
            let items = await response.json()
            console.log(items[0].merchandise)
            this.setState({
                items:items[0].merchandise
            })
    }


    render(){
        return(
            <div>
                <div className="item-container">
                <ItemContainer items={this.state.items}/>
                </div>
            </div>
        )
    }
}
export default Item