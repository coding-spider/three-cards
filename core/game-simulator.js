'use strict';

const Card = require('./card');
const Deck = require('./deck');

const Game = require('./game');

function simulateGame() {
    let game = new Game();
    game.deal();

    // display All hands
    for (let hand of game.hands) {
        hand.displayHand();
    }

    let winner = null;
    try {
        winner = findWinner(game);
        console.log('********** Winner **********');
        winner.displayHand();
    } catch (e) {
        console.error(e);
    }

    console.log('End Game');
}

function findWinner(game) {
    let winners = game.findWinners();

    if (winners.length == 0) {
        return new Error(`Invalid State`);
    } else if (winners.length == 1) {
        // Winner found;
        return winners[0];
    } else {
        // There is a tie
        game.playRound(winners);
        return findWinner(game);
    }

}

const deck = new Deck();

module.exports = simulateGame;