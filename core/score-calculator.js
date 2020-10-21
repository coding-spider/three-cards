'use strict';

const { BOOST_LEVELS } = require('./constants');

class ScoreCalculator {
    constructor() { }

    static calculate(cards) {
        let trailScoreCalculator = new TrailScoreCalculator();
        let sequenceScoreCalculator = new SequenceScoreCalculator();
        let pairScoreCalculator = new PairScoreCalculator();
        let topScoreCalculator = new TopScoreCalculator();

        trailScoreCalculator.setNext(sequenceScoreCalculator);
        sequenceScoreCalculator.setNext(pairScoreCalculator);
        pairScoreCalculator.setNext(topScoreCalculator);

        return trailScoreCalculator.calculate(cards);
    }
}


class TrailScoreCalculator {
    constructor() {
        this.boost = BOOST_LEVELS.TrailScoreCalculator;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(cards) {
        if (cards.length === 3 && cards[0].value == cards[1].value && cards[1].value == cards[2].value) {
            return cards.reduce((sum, card) => {
                return sum + (card.score * this.boost);
            }, 0);
        }
        return this.next.calculate(cards);
    }
}


class SequenceScoreCalculator {
    constructor() {
        this.boost = BOOST_LEVELS.SequenceScoreCalculator;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(cards) {
        if (cards.length === 3) {
            cards.sort(function (a, b) { return a.value - b.value; });
            if (cards[0].value - cards[1].value == -1 && cards[1].value - cards[2].value == -1) {
                return cards.reduce((sum, card) => {
                    return sum + (card.value * this.boost);
                }, 0);
            }
        }
        return this.next.calculate(cards);
    }
}

class PairScoreCalculator {
    constructor() {
        this.boost = BOOST_LEVELS.PairScoreCalculator;
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    calculate(cards) {
        if (cards.length === 3) {
            if (cards[0].value == cards[1].value || cards[1].value == cards[2].value || cards[0].value == cards[2].value) {
                return cards.reduce((sum, card) => {
                    return sum + (card.score * this.boost);
                }, 0);
            }
        }
        return this.next.calculate(cards);
    }
}

class TopScoreCalculator {
    constructor() {
        this.boost = BOOST_LEVELS.TopScoreCalculator;
        this.next = null;
    }

    calculate(cards) {
        return cards.reduce((sum, card) => {
            return sum + (card.score * this.boost);
        }, 0);
    }
}

module.exports = ScoreCalculator;