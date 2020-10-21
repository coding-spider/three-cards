const { expect } = require('chai');

const Card = require('../core/card');
const ScoreCalculator = require('../core/score-calculator');
const { SUIT } = require('../core/constants');

describe('Score Calculator', () => {

    describe('TrailScoreCalculator', () => {
        let cards = [
            new Card(1, 'A', 1, SUIT.CLUB),
            new Card(1, 'A', 1, SUIT.CLUB),
            new Card(1, 'A', 1, SUIT.CLUB)
        ];

        it('Score should be 300000', () => {
            /** Test cases */
            expect(ScoreCalculator.calculate(cards)).to.be.equal(300000)
        })

    });
})