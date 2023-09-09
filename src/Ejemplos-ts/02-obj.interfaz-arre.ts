

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
