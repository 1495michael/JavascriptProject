/*
Dias de semana abrimos a las 11,
pero los fines de semana abrimos a las 9

entra a un sitio web, para consultar si esta abierto hoy
*/
const diaLetra ={
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}
const esAbierto = (dia) =>{
    return (([0,6].includes(dia)) ? 'es fin de semana abrimos a las 9' : 'es dia de semana abrimos a las 11' );
}
console.log(esAbierto(6));