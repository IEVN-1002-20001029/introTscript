
export interface Producto{
    desc:string;
    precio:number;

}

const telefono:Producto={
    desc:'Sony',
    precio:875
}

const tablet:Producto={
    desc:'Ipad',
    precio:1837
}

function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((productos)=>{  ///recorre todos los elementos que estan en el arreglo mandados en la variable articulo1 
        total+=productos.precio
    })
    return total*0.16
}

const articulos1=[telefono,tablet];
const iva1=calcularIva(articulos1);
console.log(`iVA ${iva1}`);



export function calcularIva2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{  
        total+=precio;
    })
    return [total,total*0.16]
}

const articulos2=[telefono,tablet];
const [total,iva]=calcularIva2(articulos2);
console.log(`Total ${total}`);
console.log(`IVA ${iva1}`);