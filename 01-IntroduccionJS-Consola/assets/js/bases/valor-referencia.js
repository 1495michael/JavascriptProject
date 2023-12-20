let a = 10;
let b = a;
a = 30;
console.log({a,b});
let juan = {nombre: 'juan'};
//let ana = juan;
let ana = {...juan};//conserva su nombre original
console.log({juan, ana})
ana.nombre = 'ana';
console.log({juan, ana});

/*const cambioNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}*/
//en esta conserva original
const cambioNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}
let peter = {nombre: 'Peter'}
let tony = cambioNombre(peter);
console.log({peter,tony});
//arreglos
const frutas=['manzana', 'pera', 'piña'];
//const otras = frutas;
//const otras = [...frutas];
console.time('slice');//esto es para ver que tanto dilata en cargar la funcion slice
const otras = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otras1 = [...frutas];
console.timeEnd('spread');
otras.push('mango')
console.table({frutas, otras});