var Word = require("./word.js");
var inquirer = require('inquirer');

wordList = ["blue", "red", "green"];
var select = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0;

function startGame() {
    select = Math.floor(Math.random()*wordList.length);
    chosenWord = wordList[select];
    gameWord = new Word(chosenWord);
    gameWord.makeWord();
    console.log(gameWord.showWord());
    console.log("\nYou get 8 letter guesses to find the word.\n" )
    promptUser();
}

function promptUser() {
    if (counter<8) {
        inquirer.prompt([{
            name: "letter",
            message: "Pick a letter and press enter.\n"}]).then(data => {
                checkAnswer(data);
        });
    }
    else{
        console.log("Sorry, you're out of guesses.")
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
}

function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        counter++;
        var checkable = data.letter.toLowerCase();
        var temp = gameWord.showWord();
        gameWord.checkGuess(checkable);
        if (temp === gameWord.showWord()) {
            console.log("\nSorry, try again\n");
            promptUser();
        }
        else {
            rightGuess();
        }
        console.log(gameWord.showWord());
    }
    else {
        console.log("Please enter a letter, one at a time.")
        promptUser();
    }
}

function rightGuess() {
    console.log("\nYou guessed correctly.\n");
    if (chosenWord == (gameWord.showWord()).replace(/ /g,"")) {
        console.log('You win!!');
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();
    }
}

startGame();
