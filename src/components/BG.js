import React from 'react'
import Bird from './Bird';
import { birds, canvasWidth, canvasHeight } from '../bird-data';

const bgStyle = {
    backgroundColor: 'ef00ec'
}


const BG = () => {


    return ( 

        <React.Fragment>
            <svg viewBox={`0 0 ${canvasWidth} ${canvasHeight}`} width={canvasWidth} height={canvasHeight} style={bgStyle}>
                
                {birds.map( bird => <Bird key={bird.id} birdData={bird}/>)}

            </svg>
            div
        </React.Fragment>

   

       
     );
}
 
export default BG;
