'use strict';

const { SCORES, DISPLAY_VALUES } = require('./constants');

class Card {
    constructor(displayValue, suit) {
        const idx = DISPLAY_VALUES.indexOf(String(displayValue));
        if (idx == -1) {
            throw new Error(`Invalid ${displayValue} - ${suit}`);
        }

        this.isAvailable = true;
        this.displayValue = displayValue;
        this.suit = suit;
        this.value = idx + 1;
        this.score = SCORES[idx];
    }
}

module.exports = Card;