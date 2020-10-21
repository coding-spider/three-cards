const { expect } = require('chai');

const Card = require('../core/card');
const ScoreCalculator = require('../core/score-calculator');
const { SUIT } = require('../core/constants');

describe('Score Calculator', () => {

    describe('TrailScoreCalculator', () => {

        describe('All Aces', () => {
            let cards = [
                new Card(1, 'A', 14, SUIT.CLUB),
                new Card(1, 'A', 14, SUIT.CLUB),
                new Card(1, 'A', 14, SUIT.CLUB)
            ];

            it('Score should be 4200000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(4200000)
            })
        })

        describe('All 3s', () => {
            let cards = [
                new Card(3, '3', 3, SUIT.CLUB),
                new Card(3, '3', 3, SUIT.CLUB),
                new Card(3, '3', 3, SUIT.CLUB)
            ];

            it('Score should be 900000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(900000)
            })
        })

    });

    describe('SequenceScoreCalculator', () => {

        describe('JQK', () => {
            let cards = [
                new Card(1, 'J', 14, SUIT.CLUB),
                new Card(1, 'Q', 14, SUIT.CLUB),
                new Card(1, 'K', 14, SUIT.CLUB)
            ];

            it('Score should be 4200000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(4200000)
            })
        })

        describe('All 3s', () => {
            let cards = [
                new Card(3, '3', 3, SUIT.CLUB),
                new Card(3, '3', 3, SUIT.CLUB),
                new Card(3, '3', 3, SUIT.CLUB)
            ];

            it('Score should be 900000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(900000)
            })
        })

    });
})