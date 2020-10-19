'use strict';

const { DEFAULT_NUMBER_OF_PLAYERS } = require('./constants');

class Game {
    constructor(noOfPlayers) {
        noOfPlayers = noOfPlayers || DEFAULT_NUMBER_OF_PLAYERS;
        this.players = [];
        this.deck = new Deck();
    }
}

module.exports = Game;