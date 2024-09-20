/**
 * 2C = 2 Trebol
 * 2H = Corazones
 * 2D = Diamante
 * 2s = Espadas
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


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
    console.log(deck);

    return deck;
}

crearDeck();

//Esta función me permite tomar una carta 
const pedirCarta = () =>{

    if ( deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    
    console.log(carta);
    console.log(deck);
    return carta;
}


pedirCarta();



