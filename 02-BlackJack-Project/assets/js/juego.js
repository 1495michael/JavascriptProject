/*2C = two of clubs
* 2D = two of diamonds
* 2H = two of hearts
* 2S = two of spades
*/
let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0, puntosComputadora = 0;
//referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');
const crearDeck = () =>{
    for(let i = 2; i<=10;i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    console.log(deck);
    deck = _.shuffle(deck);//forma de barajear
    console.log(deck);
    return deck;
}
crearDeck();
const pedirCarta = () =>{
    //si no tenemos cartas, entonces no seguir
    if(deck.length ===0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();//toma el ultimo elemento y lo regresa
    console.log(deck)
    console.log(carta)
    return carta;
}
//pedirCarta();
const valorCarta = (carta) =>{
    const valor = carta.substring(0,carta.length-1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor*1;
}
//turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        //<!--img class="carta" src="./assets/cartas/2C.png" alt=""-->
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
        if(puntosMinimos > 21){
            break;
        }
    } while ((puntosComputadora<puntosMinimos)&&(puntosMinimos<=21) );
}
//valorCarta("10D")
btnPedir.addEventListener('click',()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    //<!--img class="carta" src="./assets/cartas/2C.png" alt=""-->
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    if(puntosJugador>21){
        alert("!Lo siento mucho, perdiste");
        turnoComputadora(puntosJugador);
        btnPedir.disabled=true;
        
    }else if(puntosJugador === 21){
        alert("1, genial");
        turnoComputadora(puntosJugador);
        btnPedir.disabled=true;
        
    }
});