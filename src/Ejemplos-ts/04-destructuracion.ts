
//destructurar

interface Reproductor{

    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;/// interfaz dentro de interface 
}

interface Detalles{
    autor:string;
    year:number;

}

const reproductor:Reproductor={  ///asignamos valores 
    volumen: 90,
    segundo: 550,
    cancion: "Mañanitas",
    detalles: {
        autor:'cepillin',
        year:1978
    }
}

console.log(`El volumen actual es :  ${reproductor.volumen}`);
console.log(`los segundos son :  ${reproductor.segundo}`);
console.log(`La cancion es :  ${reproductor.cancion}`);
console.log(`El autor es  :  ${reproductor.detalles.autor}`);


const{volumen,segundo,cancion,detalles}=reproductor   //desustrurar los objetos 
const{autor,year}=detalles
console.log(`El volumen actual es :  ${volumen}`);
console.log(`los segundos son :  ${segundo}`);
console.log(`El autor es  :  ${autor}`);
