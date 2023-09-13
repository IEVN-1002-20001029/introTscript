

//Una intefaz es una clase que se crea para interactuar con los objetos


interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;

}


/// crea un objeto

const alumno:Alumno={
    nombre: 'juan',
    email: 'juan@gmail.com',
    
}


console.log(alumno.nombre);

console.table(alumno);
let mascotas:string[]=['perro','gato','perico']

mascotas[1]='perico verde';
mascotas.push('gato dos');
console.table(mascotas);

let tem:(string|number)[]=[];
tem.push('RCR');
tem.push(34);
