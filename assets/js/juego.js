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
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
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


//Turno de la Computadora
const turnoComputadora = ( puntosMinimos ) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ){
            break;
        }
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana :(');
        }else if( puntosMinimos > 21){
            alert('La computadora gana');
        }else if (puntosComputadora > 21){
            alert('Ganaste');
        }else {
            alert("Computadora gana");
        }
    }, 100);

}



//EVENTOS
btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if( puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if (puntosJugador === 21){
        console.warn('21');
        btnDetener.disabled = true;
        btnPedir.disabled = true;
    }
});


btnDetener.addEventListener( 'click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () =>{
    console.clear();
   
    deck = [];
    deck = crearDeck();
    
    console.log(deck);
    
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    
    puntosComputadora = 0;
    puntosJugador = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
})