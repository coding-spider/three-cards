const { expect } = require('chai');

const Card = require('../core/card');
const ScoreCalculator = require('../core/score-calculator');
const { SUIT, BOOST_LEVELS } = require('../core/constants');

describe('Score Calculator', () => {

    describe('TrailScoreCalculator', () => {

        describe('All Aces', () => {
            let cards = [
                new Card('A', SUIT.CLUB),
                new Card('A', SUIT.CLUB),
                new Card('A', SUIT.CLUB)
            ];

            let expectedValue = (14 + 14 + 14) * BOOST_LEVELS.TrailScoreCalculator;

            it(`Max Score of TrailScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

        describe('All 2s', () => {
            let cards = [
                new Card('2', SUIT.CLUB),
                new Card('2', SUIT.CLUB),
                new Card('2', SUIT.CLUB)
            ];

            let expectedValue = (2 + 2 + 2) * BOOST_LEVELS.TrailScoreCalculator;

            it(`Min Score of TrailScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue)
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

            let expectedValue = (11 + 12 + 13) * BOOST_LEVELS.SequenceScoreCalculator;

            it(`Max Score of SequenceScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

        describe('234', () => {
            let cards = [
                new Card('2', SUIT.CLUB),
                new Card('3', SUIT.CLUB),
                new Card('4', SUIT.CLUB)
            ];

            let expectedValue = (2 + 3 + 4) * BOOST_LEVELS.SequenceScoreCalculator;

            it(`Min Score of SequenceScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

    });

    describe('PairScoreCalculator', () => {

        describe('AAK', () => {
            let cards = [
                new Card('A', SUIT.CLUB),
                new Card('A', SUIT.CLUB),
                new Card('K', SUIT.CLUB)
            ];

            let expectedValue = (14 + 14 + 13) * BOOST_LEVELS.PairScoreCalculator;

            it(`Max Score of PairScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

        describe('223', () => {
            let cards = [
                new Card('2', SUIT.CLUB),
                new Card('2', SUIT.CLUB),
                new Card('3', SUIT.CLUB)
            ];

            let expectedValue = (2 + 2 + 3) * BOOST_LEVELS.PairScoreCalculator;

            it(`Max Score of PairScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

    });


    describe('TopScoreCalculator', () => {

        describe('AKJ', () => {
            let cards = [
                new Card('A', SUIT.CLUB),
                new Card('K', SUIT.CLUB),
                new Card('J', SUIT.CLUB)
            ];

            let expectedValue = (14 + 13 + 11) * BOOST_LEVELS.TopScoreCalculator;

            it(`Max Score of TopScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

        describe('235', () => {
            let cards = [
                new Card('2', SUIT.CLUB),
                new Card('3', SUIT.CLUB),
                new Card('5', SUIT.CLUB)
            ];

            let expectedValue = (2 + 3 + 5) * BOOST_LEVELS.TopScoreCalculator;

            it(`Max Score of TopScoreCalculator should be ${expectedValue}`, () => {
                /** Test cases */
                expect(ScoreCalculator.calculate(cards)).to.be.equal(expectedValue);
            })
        })

    });
})