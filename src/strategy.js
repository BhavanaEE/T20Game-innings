"use strict";
exports.__esModule = true;
exports.probabilityRandomNumber = exports.RandomNumberGenBetween = void 0;
function RandomNumberGenBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.RandomNumberGenBetween = RandomNumberGenBetween;
function probabilityRandomNumber(indexOfPlayersName) {
    var probOfEachPlayer = [[5, 30, 25, 10, 15, 1, 9, 5], [10, 40, 20, 5, 10, 1, 4, 10], [20, 30, 15, 5, 5, 1, 4, 20], [30, 25, 5, 0, 5, 1, 4, 30]];
    var ran = RandomNumberGenBetween(0, 100), i, j, sumOfEachPlayer = 0;
    for (j = 0; j < 8; j++) {
        sumOfEachPlayer += probOfEachPlayer[indexOfPlayersName][j];
        if (sumOfEachPlayer >= ran)
            return j;
    }
}
exports.probabilityRandomNumber = probabilityRandomNumber;
