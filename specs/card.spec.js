const { expect } = require('chai');
const assert = require('assert');

const Card = require('../core/card');

describe("Card", function () {

    let card = new Card(4, 'Spade');

    it("should be an instance of card", function () {
        expect(card).to.be.an.instanceof(Card);
    });

    it("should have face value of 4", function () {
        assert.equal(card.value, 4);
    });

});