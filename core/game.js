'use strict';

const { DEFAULT_NUMBER_OF_PLAYERS, CARDS_IN_HAND } = require('./constants');
const Hand = require('./hand');
const Deck = require('./deck');

class Game {
    constructor(noOfPlayers) {
        console.log(`Creating a new game...`);
        noOfPlayers = noOfPlayers || DEFAULT_NUMBER_OF_PLAYERS;
        this.hands = new Array(noOfPlayers);
        for (let i = 0; i < this.hands.length; i++) {
            this.hands[i] = new Hand(`Hand-${i}`);
        }
        this.deck = new Deck();
    }

    deal() {
        console.log(`Dealing Cards..`);
        let counter = CARDS_IN_HAND;
        while (counter-- > 0) {
            for (let hand of this.hands) {
                // @TODO: Handle when card is null
                let card = this.deck.dealCard();
                hand.addCard(card);
            }
        }
    }

    findWinners() {
        let winners = [];

        // consider all are winners
        let possibleWinners = this.hands.filter(h => !h.hasLost);

        // Calculate Score
        for (let hand of possibleWinners) {
            hand.calculateScore();
        }

        let maxScore = possibleWinners.reduce(function (a, b) {
            return Math.max(a.score, b.score);
        });

        for (let possibleWinner of possibleWinners) {
            // If score matching winning score then add to winners array
            if (possibleWinner.score == maxScore) {
                winners.push(possibleWinner);
            } else {
                // or mark as lost
                possibleWinner.markLost();
            }
        }

        return winners;
    }

    playRound() {

    }
}

module.exports = Game;