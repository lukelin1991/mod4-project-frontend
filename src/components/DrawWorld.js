import React, { Component } from 'react'


export default class DrawWorld extends Component {

    render(){
        const layout = [ // 20x15 grid. 
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1],
            [1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1],
            [1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1],
            [1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1],
            [1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1],
        ];

        const dict = {
            0: 'ground',
            1: 'blue-wall',
            2: 'shop'
        }

        const output = layout.map(row => {
            return <div className='row' style={{}}>{
                row.map(cell => {
                    return <div
                        className={dict[cell]} style={{
                        backgroundImage: `url('/assets/tiles/${dict[cell]}.png')`,
                        display: 'inline-flex',
                        height: 40,
                        width: 40
                    }}></div> 
                })
            }</div>
        })
        return(
            <div className="world" >
                {output}
            </div>
        )
    }
}