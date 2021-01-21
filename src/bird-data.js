import { getRandomColor } from './utils.js';
import { loadSounds, sounds } from './sound-utils.js';


export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

const numBirds = 100;
const minSize = 10;

const numSounds = 10;
const soundRefs = loadSounds(sounds);
console.log(soundRefs);




export const birds = Array.from({length: numBirds}, (bird, index) => {
 return(
    {
        id: index,
        sound: sounds[index%numSounds],
        center: { x: Math.random() * canvasWidth, y: Math.random() * canvasHeight },
        headSize: Math.random() * canvasHeight/4 + minSize,
        headColor1: getRandomColor(),
        headColor2: getRandomColor(),
        irisColor: getRandomColor(),
    }
 )
})

