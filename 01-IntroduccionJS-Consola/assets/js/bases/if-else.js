let a = 5;
if(a <10 ){
    console.log('A es menor a 10')
}else{
    console.log('A es mayor a 10')
}
console.log('Fin de programa');

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay();
console.log({dia});
if(dia === 5){
    console.log('Domingo');
}else{
    console.log('No es Domingo')
}
//alternativa

const diaLetra ={
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}
console.log(diaLetra[dia] || 'Dia no definido');
const diaLetra1 ={
    0: () => 'domingo',
    1: () => 'lunes',
    2: () => 'martes',
    3: () => 'miercoles',
    4: () => 'jueves',
    5: () => 'viernes',
    6: () => 'sabado',
}
console.log(diaLetra1[dia]());