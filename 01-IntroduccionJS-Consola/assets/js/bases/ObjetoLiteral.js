let personaje = {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.79
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, CA'
    },
    ultima_pelicula: 'Infinity War'
};
console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje['edad']);
console.log('Coords: ', personaje.coords);
console.log('lat: ', personaje.coords.lat);
console.log('long: ', personaje.coords.lng);
console.log('cantidad de trajes ',personaje.trajes.length);
console.log('ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);
const x = 'vivo'
console.log('vivo ', personaje[x]);
console.log('Ultima pelicula', personaje['ultima_pelicula']);
//mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje)
console.log(entriesPares)
//si quiero bloquear los cambios, debo de cambiar de let a const

Object.freeze(personaje);//congela cualquier asignacion, pero no los objetos
personaje.dinero = 100;
console.log(personaje)

personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje)
//listado en forma de arreglos
const propiedades = Object.getOwnPropertyNames(personaje)
console.log(personaje);
const valores = Object.values(personaje)
console.log(valores);
console.log("propiedades y valores")
console.log({propiedades,valores})