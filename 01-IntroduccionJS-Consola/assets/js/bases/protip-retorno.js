//retornar objeto
function crearPersona(nombre, apellido){
    return {
        nombre:nombre,
        apellido:apellido
    }
}
const persona = crearPersona('Michael', 'Quintero');
console.log(persona)
//segunda forma de retorno
function crearPersona1(nombre, apellido){
    return {
        nombre,
        apellido
    }
}
const persona1 = crearPersona1('Michael', 'Quintero');
console.log(persona1)

const crearPersona2 = (nombre, apellido) =>({nombre, apellido});
console.log(crearPersona2)

function imprimeArgumentos(){
    console.log(arguments)
}
imprimeArgumentos(10, true, false, 'Michael', 'Hola')

//para trabajar con arguments en funcion flecha
const imprimeArgumentos1 = (...args) => {
    //console.log(args)
    return args;
}
const resultado = imprimeArgumentos1(10, true, false, 'Michael', 'Hola')
console.log(resultado);

const imprimeArgumentos2 = (edad,...args) => {
    return args;
}
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Michael', 'Hola')
console.log({casado, vivo, nombre, saludo})

const personaje = {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
};
const tony = (personajes) => {
    console.log('Nombre: '+personajes.nombre);
    console.log('Codigo: '+personajes.codeName);
    console.log('Vivo: '+personajes.vivo);
    console.log('Edad: '+personajes.edad);
    console.log('Traje: '+personajes.trajes);
}
tony(personaje);
console.log("ACA COMIENZA LA DESESTRUCTURACION")
//desestructuracion > es para obtener una variable en particular
const imprimeTony = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log('Nombre: '+nombre);
    console.log('Codigo: '+codeName);
    console.log('Vivo: '+vivo);
    console.log('Edad: '+edad);
    console.log('Traje: '+trajes);
}
imprimeTony(personaje);