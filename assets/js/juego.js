/**
 * 2C = 2 Trebol
 * 2H = Corazones
 * 2D = Diamante
 * 2s = Espadas
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;
//REFERENCIAS DEL HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');


//Esta funcion crea un nuevo deck
const crearDeck = () =>{
    //Números
    for(let i = 2; i<= 10; i++){
        for(let tipo of tipos){
            deck.push(i+ tipo);
        }
        // deck.push(i+ 'H');
        // deck.push(i+ 'D');
        // deck.push(i+ 'S');
    }

    //Cartas especiales
    for(let tipo of tipos){
        for(esp of especiales){
            deck.push(esp+tipo);
        }
    }

    deck = _.shuffle( deck);
  

    return deck;
}

crearDeck();

//Esta función me permite tomar una carta 
const pedirCarta = () =>{

    if ( deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);//Toma todos los valores ignorando el último valor de un string
    return ( isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
  
}




//EVENTOS
btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    console.log(carta);
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );
});



