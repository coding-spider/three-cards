'use strict';

let utils = (function () {
    return {
        getRandomNumberBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
})();

module.exports = utils;