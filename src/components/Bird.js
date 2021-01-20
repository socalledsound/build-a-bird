import React from 'react'
import Head from './Head';
import Eye from './Eye';
import Beak from './Beak';


const createHeadData = (center, headSize, headColor) => {

    const obj = {
        x: center.x,
        y: center.y,
        headSize,
        headColor
    }
    return obj

}

const createLeftEyeData = (center, headSize, irisColor) => {
    const leftEyeData = {
        x: center.x - headSize/3, 
        y: center.y - headSize/9, 
        size: headSize/3, 
        eyeWhiteColor: '#FFF', 
        irisColor, 
        pupilColor: '#000'
    }
    return leftEyeData
}

const createRightEyeData = (center, headSize, irisColor) => {

    const rightEyeData = {
        x: center.x + headSize/3, 
        y: center.y - headSize/9, 
        size: headSize/3, 
        eyeWhiteColor: '#FFF', 
        irisColor, 
        pupilColor: '#000'
    }
    return rightEyeData
}

const createBeakData = (center, headSize) => {
    const beakData = {
        x: center.x,
        y: center.y + headSize/4,
        width: headSize/9,
        height: headSize/3,
    }
    return beakData
}







const Bird = ({ birdData }) => {

    const { center, headSize, headColor, irisColor} = birdData;


    const headData = createHeadData(center, headSize, headColor);
    const leftEyeData = createLeftEyeData(center, headSize, irisColor);
    const rightEyeData = createRightEyeData(center, headSize, irisColor);
    const beakData = createBeakData(center, headSize);



    return ( 

        <g>
            <Head headData={headData}/> 
            <Eye eyeData={leftEyeData}/>
            <Eye eyeData={rightEyeData}/>
            <Beak beakData={beakData}/>
        </g>


        
       
     );
}
 
export default Bird;