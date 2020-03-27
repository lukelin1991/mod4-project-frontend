import React from 'react'
import {Card} from 'semantic-ui-react'
import ItemCard from './ItemCard'

const ItemContainer=(props)=>{

    let renderCards=()=>{
       let mappedItems = props.items.map(item => {
            return  <ItemCard key={item.id} itemData={item}/>
        })
        return mappedItems
    }
    return(
        <div className="item-container">
             <Card.Group itemsPerRow={4}>
                {renderCards()}
            </Card.Group>
        </div>
    )
}

export default ItemContainer