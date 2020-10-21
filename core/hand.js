'use strict';

const ScoreCalculator = require('./score-calculator.js');

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

    displayHand() {
        let str = '';
        for (let card of this.cards) {
            str += `|${card.suit}-${card.displayValue}`
        }
        console.log(`${this.name} ::: ${str}`);
    }

    resetAndAddCard(card) {
        this.cards = [card];
    }
}

module.exports = Hand;