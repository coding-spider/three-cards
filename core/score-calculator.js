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


class TrailScoreCalculagor {
    constructor() {
        this.boost = 100000;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(hand) {
        let cards = hand.cards;
        if (cards.length === 3 && cards[0].value == cards[1].value && cards[1].value == cards[2].value) {
            return cards.reduce(function (sum, card) {
                return sum + (card.score * this.boost);
            }, 0);
        }
        return this.next(hand);
    }
}


class SequenceScoreCalculator {
    constructor() {
        this.boost = 10000;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(hand) {
        let cards = hand.cards;
        if (cards.length === 3) {
            cards.sort(function (a, b) { return a.value - b.value; });
            if (cards[0].value - cards[1].value == -1 && cards[1].value - cards[2].value == -1) {
                return cards.reduce(function (sum, card) {
                    return sum + (card.score * this.boost);
                }, 0);
            }
        }
        return this.next(hand);
    }
}

class PairScoreCalculator {
    constructor() {
        this.boost = 100;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(hand) {
        let cards = hand.cards;
        if (cards.length === 3) {
            if (cards[0].value == cards[1].value || cards[1].value == cards[2].value || cards[0].value == cards[2].value) {
                return cards.reduce(function (sum, card) {
                    return sum + (card.score * this.boost);
                }, 0);
            }
        }
        return this.next(hand);
    }
}

class TopScoreCalculator {
    constructor() {
        this.boost = 1;
        this.next = null;
    }

    calculate(hand) {
        let cards = hand.cards;
        return cards.reduce(function (sum, card) {
            return sum + (card.score * this.boost);
        }, 0);
    }
}



module.exports = ScoreCalculator;