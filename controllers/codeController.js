'use strict'

var validator = require('validator');

var controller = {
    breaker: (req, res) => {
        var num = Math.floor(Math.random() * (9999 - 1000)) + 1000;

        var guess = req.params.guess;
        
        var result = "";
        var numString = num.toString();
        var guessString = guess.toString();
        for (i = 0; i < guessString.length; i++) {
            for (j = 0; j < numString.length; j++) {
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
            result: result,
        })
    }
}


module.exports = controller;