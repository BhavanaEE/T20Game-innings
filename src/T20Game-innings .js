"use strict";
exports.__esModule = true;
exports.startGame = void 0;
var strategy_1 = require("./strategy");
var playersName = ["Kirat", "Nodhi", "Rumrah", "shashi"];
var playerProperties = {};
var batsMan = playersName[0];
var runner = playersName[1];
function batsmanIndexGenerator(batsMan) {
    for (var i = 0; i < 4; i++) {
        if (batsMan == playersName[i])
            return i;
    }
}
function scoreBoard(playerProperties, playersName) {
    for (var i = 0; i < 4; i++) {
        var nameOfPlayer = playersName[i];
        var score = playerProperties[nameOfPlayer].score;
        var balls = playerProperties[nameOfPlayer].noOfBallsPlayed;
        if (playerProperties[nameOfPlayer].out == false) {
            if (balls === 0)
                console.log(nameOfPlayer + " - " + score + " (" + balls + " balls)");
            else
                console.log(nameOfPlayer + " - " + score + "* (" + balls + " balls)");
        }
        else
            console.log(nameOfPlayer + " - " + score + " (" + balls + " balls)");
    }
}
function startGame() {
    var _a, _b;
    var over, ballsInEachOver, targetScore = 40, teamScore = 0, wickets = 0, scoreOutcome;
    var hasWon = false;
    for (var i = 0; i < 4; i++) {
        playerProperties[playersName[i]] = {
            score: 0,
            noOfBallsPlayed: 0,
            out: false
        };
    }
    for (over = 0; over < 4; over++) {
        console.log(4 - over + " overs left. " + (targetScore - teamScore) + " runs to win-----------------------");
        for (ballsInEachOver = 1; ballsInEachOver <= 6; ballsInEachOver++) {
            //scoreOutcome=RandomNumberBetween(0,7); 
            var indexOfPlayersName = batsmanIndexGenerator(batsMan);
            scoreOutcome = (0, strategy_1.probabilityRandomNumber)(indexOfPlayersName);
            if (scoreOutcome === 7) {
                playerProperties[batsMan].out = true;
                playerProperties[batsMan].noOfBallsPlayed++;
                console.log(over + " . " + ballsInEachOver + " " + batsMan + " has lost wicket");
                wickets++;
                batsMan = playersName[wickets + 1];
            }
            else {
                playerProperties[batsMan].score += scoreOutcome;
                if (scoreOutcome === 1 || scoreOutcome === 0)
                    console.log(over + " . " + ballsInEachOver + " " + batsMan + " scores " + scoreOutcome + " run");
                else
                    console.log(over + " . " + ballsInEachOver + " " + batsMan + " scores " + scoreOutcome + " runs");
                playerProperties[batsMan].noOfBallsPlayed++;
                teamScore += scoreOutcome;
            }
            if (wickets === 3) {
                break;
            }
            if (targetScore < teamScore) {
                hasWon = true;
                break;
            }
            if (scoreOutcome !== 7 && scoreOutcome % 2 === 1) {
                _a = [runner, batsMan], batsMan = _a[0], runner = _a[1];
            }
        }
        _b = [runner, batsMan], batsMan = _b[0], runner = _b[1];
        if (hasWon) {
            var ballsRemaining = 24 - ((over * 6) + ballsInEachOver);
            if (ballsRemaining <= 1)
                console.log("Bengaluru won by " + (4 - wickets) + " wickets and " + ballsRemaining + " ball remaining");
            else
                console.log("Bengaluru won by " + (4 - wickets) + " wickets and " + ballsRemaining + " balls remaining");
            scoreBoard(playerProperties, playersName);
            return;
        }
        if (wickets === 3 && !hasWon) {
            if ((targetScore - teamScore) === 0) {
                console.log("Draw Match");
                scoreBoard(playerProperties, playersName);
                return;
            }
            console.log("Chennai has won by " + (targetScore - teamScore) + " runs");
            scoreBoard(playerProperties, playersName);
            return;
        }
    }
    if ((targetScore - teamScore) === 0) {
        console.log("Draw Match");
    }
    else
        console.log("Chennai has won by " + (targetScore - teamScore) + " runs");
    scoreBoard(playerProperties, playersName);
}
exports.startGame = startGame;
