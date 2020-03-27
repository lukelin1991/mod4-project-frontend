import React from 'react'
import {Card,Image,Icon,Button} from 'semantic-ui-react'



const HeroCard=(props)=>{

    
    return(
        
             <Card className="Hero-card" link>
                 <Image src={require(`../heroes/${props.heroData.image}`)} alt={props.heroData.name} size="tiny" centered/>
                 <Card.Header textAlign="center">
                     <h3>{props.heroData.name}</h3>
                 </Card.Header>
                 <Card.Content textAlign="center">
                <Icon name="gem"/>{props.heroData.value}
                 </Card.Content>

                <Card.Content textAlign="center">
                    <Button positive="true" size="small">Purchase</Button>
                </Card.Content>
                 
                
            </Card>
        
    )
}

export default HeroCard