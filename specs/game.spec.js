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

})