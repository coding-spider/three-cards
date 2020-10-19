'use strict';

class Card {
    constructor(faceValue, suit) {
        this.isAvailable = false;
        this.faceValue = faceValue;
        this.suit = suit;
    }
}

module.exports = Card;