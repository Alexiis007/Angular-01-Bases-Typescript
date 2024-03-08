/*interface AudioPlayer{
    audioVolume:number,
    songDuration:number,
    song:string,
    details:Details
};*/

/*interface Details{
    author:string,
    year:number
};*/

/*const audioPlayer : AudioPlayer={
    audioVolume:90,
    song:"Mess",
    songDuration:36,
    details:{
        author:"EdSheran",
        year:2015
    }
}*/

//Destructuracion de datos
//const { song:anotherSong, songDuration:Duration, details} = audioPlayer;
//const { author:author } = details
//console.log(`Cancion: ${anotherSong}`);
//console.log(`Autor: ${author}`);
//console.log(`Duracion: ${Duration}`);


//Desestructuracion de Arreglos
const [,,trunks = 'Not Found'] = ['Goku','Vegeta',];

console.error(`Personaje: ${trunks}`);




export{}