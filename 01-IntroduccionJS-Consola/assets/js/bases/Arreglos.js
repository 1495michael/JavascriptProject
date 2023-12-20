//const arr = new Array(10)
//const arr = []

let videJuegos = ['Mario Bros', 'Pokemon', 'Zelda'];
console.log(videJuegos)
console.log(videJuegos[0])

let arregloClosas = [true, 123, 'Michael', 1+2, function(){}, () => {}, {a:1}, ['X', 'megaman', 'zero', 'dr ligh',['dr willy', 'woodman']]];
console.log(arregloClosas)
console.log(arregloClosas[7][3])
console.log(arregloClosas[7][4][1])
//propiedades y metodos basicos de los arrays
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );
//añadir juegos
juegos.push('F-Zero');//añade al final
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );
juegos.unshift('Fire Emblem');//añade al inicio
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );
let juegoBorrado = juegos.pop();//obtener
console.log({juegoBorrado,juegos});
//quiero borrar un elemento en particular
let pos = 1;
let borrados = juegos.splice(pos,1);//ubicamos la posicion, borramos la cantidad
console.log({borrados, juegos});
//buscar un determinado indice
let index = juegos.indexOf('Metroid');//es sensible a las letras
console.log(index)