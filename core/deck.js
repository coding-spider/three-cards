'use strict';

const Card = require('./card');
const { SUIT, MAX_CARDS_IN_A_SUIT, CARDS_IN_HAND, DISPLAY_VALUES } = require('./constants');
const { getRandomNumberBetween } = require('./utils');

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
        for (let i = 1; i <= MAX_CARDS_IN_A_SUIT; i++) {
            for (let j = 0; j < suits.length; j++) {
                const faceValue = i;
                const displayValue = DISPLAY_VALUES[i - 1];
                let card = new Card(faceValue, displayValue, suits[j]);
                cards.push(card);
            }
        }
        this.cards = cards;
    }

    shuffle(rounds = 3) {
        while (rounds-- > 0) {
            for (let i = 0; i < this.cards.length; i++) {
                let j = getRandomNumberBetween(i, this.cards.length - i - 1);
                let temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
        }
    }

    remainingCards() {
        return this.cards.length - this.indexToDeal;
    }

    dealHand() {
        if (this.remainingCards() < CARDS_IN_HAND) {
            return null;
        }

        let counter = 0;
        let hand = [];
        while (counter < CARDS_IN_HAND) {
            hand[counter++] = this.dealCard();
        }
        return hand;
    }

    dealCard() {
        if (this.remainingCards() == 0) {
            return null;
        }

        let card = this.cards[this.indexToDeal++];
        card.isAvailable = false;
        return card;
    }

}

module.exports = Deck;