import React from 'react'

const Eye = ({eyeData}) => {
   
    const { x, y, size, eyeWhiteColor, irisColor, pupilColor } = eyeData;
 
    return ( 
        <g>
            <circle cx={x} cy={y} r={size} fill={eyeWhiteColor}/>
            <circle cx={x} cy={y} r={size/1.5} fill={irisColor}/>
            <circle cx={x} cy={y} r={size/5} fill={pupilColor}/>


        </g>
     );
}
 
export default Eye;