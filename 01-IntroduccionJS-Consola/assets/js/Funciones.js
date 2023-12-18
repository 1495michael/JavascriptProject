//formas
//este es una funcion estilo void
function saludar(){
    console.log('Funcion estilo void')
}
saludar();//forma de llamar a la funcion

const saludo = function(){
    console.log('Funcion anonima casi flecha estilo void')
}
saludo();
//funcion con parametros o argumentos
function saludar1(nombre){
    console.log('Hola '+nombre+' este es una funcion con parametros');
}
saludar1('michael');

const saludo1 = function(nombre){
    console.log('Hola '+nombre+' este es una funcion anonima con parametros');
}
saludo1('mike');
/****************METODO FLECHA****************/
const saludar2 = () => {
    console.log('Funcion flecha')
}
saludar2();
const saludo2 = (nombre) => {
    console.log('Hola '+nombre+' Este es una funcion flecha con parametros')
}
saludo2('michael');
/**************FUNCION DE RETORNO**********/
function sumar (a,b){
    return a + b;
}
console.log(sumar(1,2));

const sumar1 = (a,b) => {
    return a+b;
}
console.log(sumar1(1,2));
//segunda forma de funcion de flecha cuando hay un return
const sumar2 = (a,b) => (a+b);
console.log(sumar1(5,7));

function getAleatorio(){
    return Math.random()
}
console.log(getAleatorio());
//TRANSFORME GET ALEATORIO EN FUNCION FLECHA
const get_aleatorio = () => Math.random();
console.log(get_aleatorio())