'use strict';

const ScoreCalculator = require('./ScoreCalculator');

class Hand {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    score() {
        // Score Calculator Logic
        return ScoreCalculator.calculate(this.cards);
    }
}

module.exports = Hand;