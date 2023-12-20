const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}
const myundefined = undefined, mynull = null, myfalse = false;
const valor = {
    p:true,
    q:false,
}
console.warn('Not o negacion');
console.log(!true) //false
console.log(!false) //true
console.log('uso de la funcion');
console.log(!regresaFalse());//true
console.log(!regresaTrue());//false
console.warn('AND: true si todos los valores son verdaderos')
console.log('true AND true = ', true && true);
console.log('true AND false = ', true && false);
console.log('false AND true = ', false && true);
console.log('false AND false = ', false && false);
console.warn('OR: true si uno de los valores son verdaderos')
console.log('true OR true = ', true || true);
console.log('true OR false = ', true || false);
console.log('false OR true = ', false || true);
console.log('false OR false = ', false || false);
