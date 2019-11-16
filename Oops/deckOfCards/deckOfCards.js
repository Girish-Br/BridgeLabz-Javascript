/*************************************************************************************************
 *  @Purpose        : To print the cards received by 4 players using 2D array.          
 *  @file           : deckOfCards.js
 *  @overview       : To initialize deck of cards having suit and Rank then shuffle the cards using 
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
                      received by the 4 Players.
 *  @author         : GIRISH B R
 *  @since          : 12-11-2019
 ***************************************************************************************************/
//to import prompt to take user
const prompt = require('prompt-sync')();
function deckOfCards() {
    let suits = ["♣️", "♦️", "♥️", "♠️"];
    let values = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    //to calculate length of suits and values
    let n = suits.length * values.length;
    // to create new array of deck
    let deck = new Array(n);
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            //print value of suits and rank in array
            deck[suits.length * i + j] = values[i] + suits[j];
        }
    }
    // shuffle deck
    for (let k = 0; k < n; k++) {
        // parsing random method
        let r = k + parseInt(Math.random() * (n - k));
        //swapping
        let temp = deck[r];
        deck[r] = deck[k];
        deck[k] = temp;
    }
    let number = prompt(`enter number of players:`);
    // print shuffled deck
    var players = [[], [], [], []];
    let start = 0, end = 9;
    for (let i = 0; i < 4; i++) {
        /*
         * @purpose: Distribute cards for each player
         */
        for (let j = start; j < end; j++) {
            players[i].push(deck[j]);
        }
        start = start + 9;
        end = end + 9;
    }
    console.log(players); //Print the distributed cards for 4 player
}
//call function()
deckOfCards();