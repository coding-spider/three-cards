'use strict';

class Card {
    constructor(value, displayValue, score, suit) {
        this.isAvailable = true;
        this.value = value;
        this.displayValue = displayValue;
        this.score = score;
        this.suit = suit;
    }
}

module.exports = Card;