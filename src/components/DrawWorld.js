import React, { Component } from 'react'
import { SPRITE_SIZE } from './constants.js'


export default class DrawWorld extends Component {

    render(){
        const layout = [ // 20x15 grid. 
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        ];

        const dict = {
            0: 'ground',
            1: 'blue-wall',
            2: 'shop'
        }

        const output = layout.map(row => {
            return <div className='row'>{
                row.map(cell => {
                    return <div
                        className={dict[cell]} style={{
                        backgroundImage: `url('/assets/tiles/${dict[cell]}.png')`,
                        display: 'inline-flex',
                        height: SPRITE_SIZE,
                        width: SPRITE_SIZE
                    }}></div> 
                })
            }</div>
        })
        return(
            <div className="world">
                {output}
            </div>
        )
    }
}

// const dict = {
//     0: 'ground',
//     1: 'blue-wall',
//     2: 'shop'
// }

// const MapTile = ({tile, idx}) => {

//     const GroundTile = () => {
//         return (
//             <div style={{
//                 backgroundImage: url('../data/tiles/ground.png'),
//                 display: 'inline-flex',
//                 height: SPRITE_SIZE,
//                 width: SPRITE_SIZE
//             }}></div>
//         )
//     }
// }