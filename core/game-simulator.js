'use strict';

const Card = require('./card');
const Deck = require('./deck');

const Game = require('./game');

function simulateGame() {
    let game = new Game();

    let winner = null;
    try {
        winner = findWinner(game);
        console.log('Winner:::', winner);
    } catch (e) {
        console.error(e);
    }

    console.log('End Game');
}

function findWinner(game) {
    let winners = game.getWinners();

    if (winners.length == 0) {
        return new Error(`Invalid State`);
    } else if (winners.length == 1) {
        // Winner found;
        return winner[0];
    } else {
        // There is a tie
        game.playRound(winners);
        return findWinner(game);
    }

}

module.exports = simulateGame;