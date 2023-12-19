/*const Mayor = (a,b) => {
    return (a>b) ? a:b;
}*/
const Mayor = (a,b) => (a>b) ? a:b;
console.log('el mayor es: ', Mayor(5,10));

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = ['Peter', 'Tont', 'Dr Strange', amigo ? 'Thor' : 'Loki'];
console.log(amigosArr);

const esAprobado = (nota) => (nota>=60) ? 'aprobado':'reprobado';
console.log(esAprobado(70));