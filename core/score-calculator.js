'use strict';

class ScoreCalculator {
    constructor() { }

    static calculate() {
        this.checkTrail()
    }

    addCard(card) {
        this.cards.push(card);
    }

    score() {
        // Score Calculator Logic
        let score = 0;
        return score;
    }
}


class Trail {
    constructor() {
        this.boost = 100;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(hand) {
        let cards = hand.cards;
        if (cards.length === 3 && cards[0].value == cards[1].value && cards[1].value == cards[2].value) {
            return cards.reduce(function (sum, card) {
                return sum + card.score;
            }, 0);
        }
        return thisb.next(hand);
    }
}




module.exports = ScoreCalculator;