'use strict';

const ScoreCalculator = require('./ScoreCalculator');

class Hand {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.hasLost = false;
        this.score = 0;
    }

    addCard(card) {
        this.cards.push(card);
    }

    calculateScore() {
        // Score Calculator Logic
        this.score = ScoreCalculator.calculate(this.cards);
        return this.score;
    }

    markLost() {
        this.hasLost = true;
    }
}

module.exports = Hand;