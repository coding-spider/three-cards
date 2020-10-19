'use strict';

const Card = require('./card');
const Deck = require('./deck');

let card = new Card(4, 7);

let deck = new Deck();
console.log(deck.cards);
console.log(deck.dealHand());
console.log(deck.dealHand());
console.log(deck.remainingCards());
console.log(deck.cards);

// console.log(card.getFaceValue());

// // let deck = new Deck();
// // console.log(dsseck);
