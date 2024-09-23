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


const valorCarta = (carta) => {
    // if( isNaN(valor)){
        
    //    valor = (valor === 'A')? 11 : 10;

    // }else{
    //    valor = valor * 1;
    // }

    const valor = carta.substring(0, carta.length - 1);//Toma todos los valores ignorando el último valor de un string
    return ( isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
  
}

const valor = valorCarta(pedirCarta());
console.log({ valor });


