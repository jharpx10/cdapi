'use strict'

var validator = require('validator');
var num = Math.floor(Math.random() * (9999 - 1000)) + 1000;
var numString = num.toString();
var controller = {
    breaker: (req, res) => {
        var guess = req.params.guess;
        var result = "";
        var guessString = guess.toString();
        for (let i = 0; i < guessString.length; i++) {
            for (let j = 0; j < numString.length; j++) {
                if (guessString[i] == numString[j]) {
                    if (i === j) {
                        result += "X"
                    } else {
                        result += "-"
                    }
                }
            }
        }
        return res.status(200).send({
            num: numString,
            result: result,
        })
    }
}


module.exports = controller;