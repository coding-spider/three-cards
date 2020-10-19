'use strict';

class Card {
    constructor(faceValue, suit) {
        this.isAvailable = true;
        this.faceValue = faceValue;
        this.suit = suit;
    }
}

module.exports = Card;