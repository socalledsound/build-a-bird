import { getRandomColor } from './utils.js';
import { loadSounds, sounds, howls } from './sound-utils.js';


export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

const numBirds = 100;
const minSize = 10;


const soundRefs = loadSounds(sounds);
//console.log(soundRefs);




export const birds = Array.from({length: numBirds}, (bird, index) => {
 const baseHeadSize = Math.random() * canvasHeight/4 + minSize;
    return(
    {
        id: index,
        // soundFile: sounds[index%numSounds],
        howl: howls[index%6],
        center: { x: Math.random() * canvasWidth, y: Math.random() * canvasHeight },
        startHeadSize: baseHeadSize,
        smallHeadSize: baseHeadSize/3,
        largeHeadSize: baseHeadSize * 1.2,
        headColor1: getRandomColor(),
        headColor2: getRandomColor(),
        irisColor: getRandomColor(),
    }
 )
})

