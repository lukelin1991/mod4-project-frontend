import React from 'react'
import {Card,Image,Icon,Button} from 'semantic-ui-react'



const ItemCard=(props)=>{
let {name,itemtype,damage,defense,image,value} = props.itemData
    
    return(
        
             <Card className="item-card" link>
                 <Image src={require(`../test/${image}`)} alt={name} size="tiny" centered/>
                 <Card.Header textAlign="center">
                     <h3>{name}</h3>
                 </Card.Header>
                 <Card.Content textAlign="center">
                <Icon name="gem"/>{value}
                 </Card.Content>

                <Card.Content textAlign="center">
                    <Button positive="true" size="small">Purchase</Button>
                </Card.Content>
                 
                
            </Card>
        
    )
}

export default ItemCard