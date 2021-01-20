import React from 'react'
const Beak = ({ beakData }) => {
    const { x, y, width, height } = beakData;

    // "x1, y1, x2, y2, x3, y3 "
    const points = `${x - width},${y} ${x + width},${y}, ${x},${y+height}`


    return ( 

        <polygon points={points} fill="yellow"/>
     );
}
 
export default Beak;