//document.write('Hola Mundo');//esto imprime en el navegador
console.log('Hola Mundo');
//uso de variables
let a = 10, d=1, e = 2, f = a + d;//se usa actualmente, y esta se le puede reescribir valores
console.log(a)
var b = 10;//es la forma antigua de crear variables
console.log(b)
const c = 10;//es una constante, no se puede volver a reasignar
//---------reasignacion de variables
a = 20;
console.log('a', a)
b = 20;
console.log('b',b)
//---------usos de console.log
console.warn(a)
console.error(b)
console.log('%c hola','color:blue; font-weight:bold')
console.table({a,b,c,d,e,f})
//concatenar
a = 'hola'
b = ' michael'
const saludo = a + b;
console.log(saludo)