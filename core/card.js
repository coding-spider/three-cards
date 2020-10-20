'use strict';

class Card {
    constructor(faceValue, displayValue, suit) {
        this.isAvailable = true;
        this.faceValue = faceValue;
        this.displayValue = displayValue;
        this.suit = suit;
    }
}

module.exports = Card;