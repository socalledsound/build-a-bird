import { getRandomColor } from './utils.js';

export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

const numBirds = 100;
const minSize = 10;


export const birds = Array.from({length: numBirds}, (bird, index) => {
 return(
    {
        id: index,
        center: { x: Math.random() * canvasWidth, y: Math.random() * canvasHeight },
        headSize: Math.random() * canvasHeight/4 + minSize,
        headColor: getRandomColor(),
        irisColor: getRandomColor(),
    }
 )
})

