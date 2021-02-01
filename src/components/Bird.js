import React from 'react'
import Head from './Head';
import Eye from './Eye';
import Beak from './Beak';

console.log('bird type:', typeof Beak)

class Bird extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            headSize: this.props.birdData.startHeadSize,
            startHeadSize : this.props.birdData.startHeadSize,
            largeHeadSize: this.props.birdData.largeHeadSize, 
            smallHeadSize: this.props.birdData.smallHeadSize,
            irisColor: this.props.birdData.irisColor,
            originalIrisColor: this.props.birdData.irisColor,
            altIrisColor: '#FF0000',
            eyeToggle : false,
            center: this.props.birdData.center,
            originalCenter : this.props.birdData.center,
            range : 100,
            dir : {x: 1, y: 1},
            vel: {x: Math.random() * 0.1, y:  Math.random() * 0.5},
            speed: Math.random() * 1000 + 30,
            randomLeftEyeVal: 0,
            randomRightEyeVal: 0,
            coinVal : 0.99,
            originalCoinVal : 0.99,
            fastCoinVal : 0.3,
            opacity: 1.0,
            zIndex: this.props.birdData.zIndex,
            front : false,
            growing : false,
            soundPlaying: false,
            howl: this.props.birdData.howl,
           
        };
        this.maxHeadSize = 300;
        this.audioRef = React.createRef();
    // this.animate()        

        setInterval(this.move, this.speed);
        setInterval(this.moveLeftEye, this.speed);
        setInterval(this.moveRightEye, this.speed);
    }


    // animate(){
    //     this.move()
    //     this.moveLeftEye()
    //     this.moveRightEye()
    //     requestAnimationFrame(this.animate);
    // }



    checkRange(center, originalCenter, dir, range){

        const newDirX = center.x  > originalCenter.x + range || center.x < originalCenter.x - range ? dir.x * -1 : dir.x;
        const newDirY = center.y  > originalCenter.y + range || center.y < originalCenter.y - range ? dir.y * -1 : dir.y;

        return ({x: newDirX, y: newDirY})
    }

    checkRandomEyeMove = () => {
        const  { coinVal } = this.state;
        const coin = Math.random() > coinVal ? true: false;
        return coin;
    }

    move = () => {
        const {center, originalCenter, dir, vel, range} = this.state;
        // console.log(dir);
        const newDir = this.checkRange(center, originalCenter, dir, range);
        const newCenter = {x: center.x + (newDir.x * vel.x), y: center.y + (newDir.y * vel.y)}
        
        this.setState({ center: newCenter, dir: newDir})
    }

    moveLeftEye = () => {
        const val = this.checkRandomEyeMove();
        // console.log(val);
        if(val){
            this.setState({ randomLeftEyeVal: Math.random() * 2 - 2 })
        }
    }

    moveRightEye = () => {
        const val = this.checkRandomEyeMove();
        // console.log(val);
        if(val){
            this.setState({ randomRightEyeVal: Math.random() * 6 - 6 })
        }
    }

    reduceHeadSize = () => {
        const { headSize, smallHeadSize, zIndex } = this.state;
        const newZindex = zIndex - 1;
        if(headSize > smallHeadSize){
            requestAnimationFrame(this.reduceHeadSize)
        }
        this.setState({ headSize: headSize * 0.8, opacity: 0.1, zIndex: newZindex});
    }

    grow = () => {
        const { headSize, largeHeadSize, zIndex, front, growing } = this.state;

        this.setState({ headSize: headSize * 1.05});
        // console.log(headSize, growing);
        // const newZindex = front ? zIndex : zIndex + 10;
        // console.log(newZindex);
        if(headSize < largeHeadSize && headSize < this.maxHeadSize && growing){
            // console.log('growing')
            requestAnimationFrame(this.grow)
        }
        
    
    }

    seeRed(){
        const { originalIrisColor, altIrisColor, eyeToggle, originalCoinVal, fastCoinVal } = this.state;
        const newEyeToggle = !eyeToggle;
        const col = newEyeToggle ? altIrisColor : originalIrisColor;
        const newCoinVal = newEyeToggle ? fastCoinVal : originalCoinVal;
        this.setState({ irisColor: col, eyeToggle: newEyeToggle, coinVal: newCoinVal })
    }

    playSound(){
        const { howl, soundPlaying } = this.state;
        if(!soundPlaying){
            howl.play();
        }
        // const audio = new Audio(this.audioRef.current.src);
        // audio.play();
        // console.log(audio, audio.play());
        this.setState({ soundPlaying : true })
    }

    triggerGrowing(){

        this.playSound()
       


        setTimeout(this.reduceHeadSize, 3000);
        this.setState({growing: true, front : true, soundPlaying: true }, () => this.grow());
    }

    render(){
        const { center, headSize, irisColor, randomLeftEyeVal, randomRightEyeVal, opacity, zIndex } = this.state;
        const { headColor1, headColor2, soundFile } = this.props.birdData;
        // console.log(headSize);
        // if(front){
        //     console.log(zIndex);
        // }
        return ( 
            <React.Fragment>
            {headSize > 10 &&
            <g style={{position: 'absolute', zIndex: `${zIndex}` }}  onClick={() => this.triggerGrowing()} onMouseEnter={() => this.seeRed()} onMouseLeave={() => this.seeRed()}>
                <Head x={center.x} y={center.y} headSize={headSize} headColor1={headColor1} headColor2={headColor2} opacity={opacity}/> 
                <Eye x={center.x - headSize/3 + randomLeftEyeVal} y={center.y - headSize/9} size={headSize/3} eyeWhiteColor={'#FFF'} irisColor={irisColor} pupilColor={'#000'}/>
                <Eye x={center.x + headSize/3 - randomRightEyeVal} y={center.y - headSize/9} size={headSize/3} eyeWhiteColor={'#FFF'} irisColor={irisColor} pupilColor={'#000'}/>
                <Beak x={center.x} y={center.y + headSize/4} width={headSize/9} height={headSize/3}/>
            </g>
            }
            
            <audio ref={this.audioRef} src={soundFile} autoPlay/>
            
             </React.Fragment>
     );
    }

    

        
       
    
}
 
export default Bird;