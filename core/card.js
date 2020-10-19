'use strict';

class Card {
    isAvailable = false;

    constructor(faceValue, suit) {
        this.faceValue = faceValue;
        this.suit = suit;
    }
}

module.exports = Card;