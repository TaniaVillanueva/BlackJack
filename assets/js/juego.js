/**
 * 2C = 2 Trebol
 * 2H = Corazones
 * 2D = Diamante
 * 2s = Espadas
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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

    console.log(deck);
    deck = _.shuffle( deck);
    console.log(deck);

    return deck;
}

crearDeck()