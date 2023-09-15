import { Producto, calcularIva2 } from "./05-desestructurar-funciones"; ///importamos las funciones e interfaz de esta manera 


const carrito:Producto[]=[
    {
        desc:'telefono1',
        precio:8738
    },
    {
        desc:'telefono2',
        precio:8738
    },
    {
        desc:'telefono3',
        precio:8738
    },
]

const [total3,iva3]= calcularIva2(carrito);
console.log(`Total ${total3}`);
console.log(`iva :${iva3}`);