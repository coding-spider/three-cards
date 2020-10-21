const { expect } = require('chai');

const Card = require('../core/card');
const ScoreCalculator = require('../core/score-calculator');
const { SUIT } = require('../core/constants');

describe('Score Calculator', () => {

    describe('TrailScoreCalculator', () => {

        describe('All Aces', () => {
            let cards = [
                new Card('A', SUIT.CLUB),
                new Card('A', SUIT.CLUB),
                new Card('A', SUIT.CLUB)
            ];

            it('Score should be 4200000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(4200000)
            })
        })

        describe('All 2s', () => {
            let cards = [
                new Card('2', SUIT.CLUB),
                new Card('2', SUIT.CLUB),
                new Card('2', SUIT.CLUB)
            ];

            it('Score should be 600000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(600000)
            })
        })

        describe('All 3s', () => {
            let cards = [
                new Card('3', SUIT.CLUB),
                new Card('3', SUIT.CLUB),
                new Card('3', SUIT.CLUB)
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
                new Card('J', SUIT.CLUB),
                new Card('Q', SUIT.CLUB),
                new Card('K', SUIT.CLUB)
            ];

            let boost = 10000;

            it('Score should be 350000', () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal((11 + 12 + 13) * boost);
            })
        })

    });
})