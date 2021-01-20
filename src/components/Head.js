import React from 'react'

const Head = ({ headData }) => {
    const {x, y, headSize, headColor } = headData;
    return ( 
        <circle cx={x} cy={y} r={headSize} fill={headColor}/>
     );
}
 
export default Head;