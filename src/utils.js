import chroma from 'chroma-js'

export const getRandomColor = () => {
    // return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    // return `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
    return Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")
}


//‘#’+(Math.random()*0xFFFFFF<<0).toString(16);
// Math.floor(Math.random()*8**8).toString(16);


// export const getRandomChromaColor = () => {
//     return `${Math.floor(Math.random() * 16777215)}`
// }


//export const getColorGradient = () => chroma.scale([chroma(getRandomChromaColor()), chroma(getRandomChromaColor())])
export const getColorGradient = (color1, color2) => {
    // console.log(color1);
  return  chroma.scale([chroma.gl(chroma(color1)), chroma(color2)])
}