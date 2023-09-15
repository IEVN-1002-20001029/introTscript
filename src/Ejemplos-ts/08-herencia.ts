
class Persona4{

    protected nombre:string;
    protected edad:number;
    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }

    
    imprimir(){
        console.log(`p4 Nombre:${this.nombre} Edad:${this.edad}`);

    }

}


class Empleado extends Persona4 {
    private sueldo:number;

    constructor(a:string,b:number,s:number) {
        super(a,b);
        this.sueldo=s;

    }

    
    imprimir(){
        console.log(`Sueldo: ${this.sueldo}`);

    }

    pagarImpuestos(){
        if(this.sueldo>5000)
        console.log(` : ${this.nombre} debe de pagar impuestos : sueldo ${this.sueldo}`) ;
        else
        console.log(`${this.nombre} no paga impuestos : Sueldo : ${this.sueldo}`);

    }
}

const persona4=new Persona4('Juan',45);
persona4.imprimir();
const empleado1 = new Empleado('Ana',22,7000);
empleado1.imprimir();
empleado1.pagarImpuestos();