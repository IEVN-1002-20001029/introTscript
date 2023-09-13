function suma ():void {
    console.log(`La suma es ${3+5}`);
}

suma();     

function suma2(a:number,b:number):number{
    
    return a+b
}

const resultado= suma2(7,8)

console.log(`la suma es ${resultado}`);
//console.log(resultado);

function multiplicar(n1:number,n2:number,base:number):number{
    let tem=n1*base;

    return tem;
}
console.log(multiplicar(3,4,5));



interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; ///asi se define una funcion en una interfaz

}

function calcular(mascota:Mascotas,x:number):void{ ///le pasamos un objeto a una interfaz 
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ', this.edad);

    }
}
calcular(nuevaMascota,3);