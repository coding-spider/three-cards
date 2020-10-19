'use strict';

const { DEFAULT_NUMBER_OF_PLAYERS, CARDS_IN_HAND } = require('./constants');
const Hand = require('./hand');
const Deck = require('./deck');

class Game {
    constructor(noOfPlayers) {
        noOfPlayers = noOfPlayers || DEFAULT_NUMBER_OF_PLAYERS;
        this.hands = new Array(noOfPlayers);
        for (let i = 0; i < this.hands.length; i++) {
            this.hands[i] = new Hand();
        }
        this.deck = new Deck();
        this.deal();
    }

    deal() {
        let counter = CARDS_IN_HAND;
        while (counter-- > 0) {
            for (let hand of this.hands) {
                // @TODO: Handle when card is null
                let card = this.deck.dealCard();
                hand.addCard(card);
            }
        }
    }

    getWinner() {
        return [];
    }
}

module.exports = Game;