import React, { Component } from 'react';
import { ANIMATION_SPEED, SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './constants'
import Geezer from '../player/old-geezer.png';

export default class Player extends Component {
    canvasRef = React.createRef()

    directionMap = {
        FACE_DOWN: 0,
        FACE_LEFT: 1,
        FACE_RIGHT: 2,
        FACE_UP: 3
    }
    
    state = {
        direction: this.directionMap.FACE_DOWN,
        position: [0,6],
        playerMoved: false,
        leftSideStride: true,
        stamp: 0
    }

    // retrieving new position.
    getNewPosition = (oldPos, direction) => {
        switch(direction){
            case 'FACE_LEFT':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case 'FACE_RIGHT':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case 'FACE_UP':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case 'FACE_DOWN':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
            default:     
        }
    }
    // direction positioning
    movePlayer = (direction) => {
        const oldPos = this.state.position
        const newPos = this.getNewPosition()
    }

    // "WASD" or Arrow key movements.
    handleKeyDown = e => {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
            case 65:
                return this.movePlayer("FACE_LEFT")
            case 38:
            case 87:
                return this.movePlayer("FACE_UP")
            case 39:
            case 68:
                return this.movePlayer("FACE_RIGHT")
            case 40:
            case 83:
                return this.movePlayer("FACE_DOWN")
            default:
                console.log('key not mapped: ', e.keyCode)
        }
    }

    //this is where drawing sprite position.
    avatar(action, dir = 0){
        if (this.canvasRef && this.canvasRef.current){
            //going to utilize canvas to get context.
            const ctx = this.canvasRef.current.getContext('2d');
            const spriteLine = dir * SPRITE_SIZE;

            let currentFrame = this.state.leftSideStride ? 0 : 1;
            let currentTick = 0;
            const ticksPerFrame = 5;

            const draw = frame => {
                // setting limiters to not allow invalid frames.
                if(frame > 7 || frame < 0) frame = 0;

                ctx.clearRect(0, 0, SPRITE_SIZE, SPRITE_SIZE)
                // drawImage function for Context.
                ctx.drawImage( // s = relate to the source image, and d = relate to the destination.
                    this.sprite, //image
                    frame * SPRITE_SIZE, //sx
                    spriteLine, //sy
                    SPRITE_SIZE, //sWidth
                    SPRITE_SIZE, //sHeight
                    0, //dx
                    0, //dy
                    SPRITE_SIZE, //dWidth
                    SPRITE_SIZE //dHeight
                )
            }
            // updating movement.
            const update = () => {
                currentTick += 1
                if (currentTick > ticksPerFrame){
                    currentTick = 0;
                    currentFrame += 1;
                }
            }

            const main = () => {
                draw(currentFrame);
                update();
                const id = window.requestAnimationFrame(main);

                if(this.state.leftSideStride && currentFrame > 4){
                    window.cancelAnimationFrame(id);
                }
                if(!this.state.leftSideStride && currentFrame > 8){
                    window.cancelAnimationFrame(id)
                }
            }

            if (action === 'draw'){ // sets if action parameter is draw. 
                draw(0)
            }
            if (action === 'animate'){
                main();
            }
        }
    }
    // WAIT
    componentDidMount(){
        this.sprite = new Image();
        this.sprite.src = Geezer; // image.
        this.sprite.onload = () => {
            this.avatar('draw', this.directionMap[this.state.direction])
        }
    }

    componentDidUpdate(prevProps, prevState){
        this.avatar('draw', this.directionMap[this.state.direction])

        // did char move?
        if(prevState.playerMoved !== this.state.playerMoved && this.state.stamp + ANIMATION_SPEED < Date.now()){
            this.setState({
                stamp: Date.now(),
                leftSideStride: !this.state.leftSideStride
            }, () => {
                this.avatar('animate', this.directionMap[this.state.direction])
            })
        }
    }

    render(){
        return(
            <div className='player__animation' style={{
                top: this.state.position[1],
                left: this.state.position[0],
                display: 'inline-flex'
            }}>
                <canvas ref={this.canvasRef} width={SPRITE_SIZE} height={SPRITE_SIZE}/>
            </div>
        )
    }
}