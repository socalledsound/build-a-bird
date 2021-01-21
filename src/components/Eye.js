import React from 'react'



const Eye = ({x, y, size, eyeWhiteColor, irisColor, pupilColor}) => {
 
    return ( 
        <g>
            <circle cx={x} cy={y} r={size} fill={eyeWhiteColor}/>
            <circle cx={x} cy={y} r={size/1.5} fill={irisColor}/>
            <circle cx={x} cy={y} r={size/5} fill={pupilColor}/>


        </g>
     );
}
 
export default Eye;