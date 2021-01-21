
const importAll = (r) =>  {
    let sounds = {};
    r.keys().forEach((item, index) => { sounds[item.replace('./', '')] = r(item); });
    return sounds;
}

export const sounds = importAll(require.context('./assets/sounds/', false, /\(.mp3)$/));




export const buffers = [];
export let soundFileData;
export const soundFileDatas = []
export let numBuffers = 0;

export const initSound = () => {

}


export const loadSounds = (sounds) => {
    console.log(sounds);

}
