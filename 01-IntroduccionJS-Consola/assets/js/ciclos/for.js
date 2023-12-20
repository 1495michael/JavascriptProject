const heroes = ['batman','superman','mujer maravilla','aquaman'];
console.warn('FOR TRAFICIONAL');
for(let i = 0;i<heroes.length;i++){
    console.log(heroes[i]);
}
console.warn('FOR IN')
for(let i in heroes){
    console.log(heroes[i]);
}
console.warn('FOR OF')
//extrae los valores de heroes y la var i toma su posicion
for(let i of heroes){
    console.log(i);
}