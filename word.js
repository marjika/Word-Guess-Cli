var Letter = require("./letter.js");

function Word(wordArr) {
    this.wordArr = wordArr;
    this.testWord = [];
    this.makeWord = function() {
        for (var i=0; i<wordArr.length; i++) {
            var let = new Letter(wordArr[i]);
            this.testWord.push(let);
        }
    }
    this.showWord = function() {
        var wordDisplay = [];
        for (var i=0; i<this.testWord.length; i++) {
            wordDisplay.push(this.testWord[i].displayLet());
        }
        return wordDisplay.join(" ");
    }
    this.checkGuess = function(myGuess) {
        for (var i=0; i<this.testWord.length; i++) {
            this.testWord[i].check(myGuess);
        }
    }
}

module.exports = Word;