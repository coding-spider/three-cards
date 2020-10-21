const { expect } = require('chai');

const Card = require('../core/card');
const Game = require('../core/game');
const Hand = require('../core/hand');
const { SUIT } = require('../core/constants');

describe('Game Spec', () => {

    let game = new Game();

    describe('Trial wins over sequence', () => {

        let AAA = new Hand('AAA');
        AAA.cards = [
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB)
        ]

        let AAK = new Hand('AAK');
        AAK.cards = [
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB),
            new Card('K', SUIT.CLUB)
        ]

        let hands = [
            AAA,
            AAK
        ]

        game.hands = hands;
        let winners = game.findWinners();

        it(`winners should contain atleat 1 value`, () => {
            /** Test cases */
            expect(winners.length).to.equal(1);
        })

        it(`AAA > AAK`, () => {
            /** Test cases */
            expect(winners[0]).to.be.equal(AAA);
        })
    })


    describe('Simulate a tie', () => {

        let AAK1 = new Hand('AAK1');
        AAK1.cards = [
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB),
            new Card('K', SUIT.CLUB)
        ]

        let AAK2 = new Hand('AAK2');
        AAK2.cards = [
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB),
            new Card('K', SUIT.CLUB)
        ]

        let hands = [
            AAK1,
            AAK2
        ]

        game.hands = hands;
        let winners = game.findWinners();

        it(`Should hve 2 winners`, () => {
            /** Test cases */
            expect(winners.length).to.equal(2);
        })

        it(`Score should be equal`, () => {
            /** Test cases */
            expect(winners[0].score).to.be.equal(winners[1].score);
        })
    })


    describe('Draw New Cards in case of a tie', () => {

        let AAK1 = new Hand('AAK1');
        AAK1.cards = [
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB),
            new Card('K', SUIT.CLUB)
        ]

        let AAK2 = new Hand('AAK2');
        AAK2.cards = [
            new Card('A', SUIT.CLUB),
            new Card('A', SUIT.CLUB),
            new Card('K', SUIT.CLUB)
        ]

        let hands = [
            AAK1,
            AAK2
        ]

        game.hands = hands;
        let winners = game.findWinners();

        it(`Should have 2 winners`, () => {
            /** Test cases */
            expect(winners.length).to.equal(2);
        })

        it(`Score should be equal`, () => {
            /** Test cases */
            expect(winners[0].score).to.be.equal(winners[1].score);
        })

        it(`should have 1 winner`, () => {
            /** Test cases */
            game.playRound();
            winners = game.findWinners();
            expect(winners.length).to.equal(1);
        })
    })

})