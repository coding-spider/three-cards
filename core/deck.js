'use strict';

const Card = require('./card');
const { SUIT } = require('./constants');

class Deck {

    constructor() {
        this.indexToDeal = 0;
        this.cards = new Array(52);
        this.initializeDeck();
        this.shuffle();
    }

    initializeDeck() {
        const suits = Object.keys(SUIT);
        let cards = [];
        for (let i = 1; i <= 13; i++) {
            for (let j = 0; j < suits.length; j++) {
                let card = new Card(i, suits[j]);
                cards.push(card);
            }
        }
        this.cards = cards;
    }

    shuffle() {

    }

    remainingCards() {
        return this.cards.length - this.indexToDeal;
    }

}

module.exports = Deck;