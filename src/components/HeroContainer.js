import React from 'react'
import {Card} from 'semantic-ui-react'
import HeroCard from './HeroCard'

const HeroContainer=(props)=>{

    let renderCards=()=>{
       let mappedHeros = props.heros.map(hero => {
            return  <HeroCard key={hero.id} heroData={hero}/>
        })
        return mappedHeros
    }
    return(
        <div className="item-container">
            <h1 className="shoptitle">Heros</h1>
             <Card.Group itemsPerRow={4}>
                {renderCards()}
            </Card.Group>
        </div>
    )
}

export default HeroContainer