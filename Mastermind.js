'use strict';

//Prompt User Input
var prompt = require('prompt');
prompt.start();

var colors = require('colors/safe');

//Build the Board
var board = [];
for (var i = 0; i < 10; i++){
    board.push([' ', ' ', ' ', ' ']);//.join(' '));
}

function printBoard() {
    console.log(board[0].join(' '));
    console.log(board[1].join(' '));
    console.log(board[2].join(' '));
    console.log(board[3].join(' '));
    console.log(board[4].join(' '));
    console.log(board[5].join(' '));
    console.log(board[6].join(' '));
    console.log(board[7].join(' '));
    console.log(board[8].join(' '));
    console.log(board[9].join(' '));
};

//var solution = 'abcd'
//How does min and max become indecies? 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var solution = '';

function generateRandomCode(){

	for (var i = 0; i < 4; i++) {
		var randomIndex = getRandomInt(0, letters.length);
		solution = solution + letters[randomIndex];
	}
}

// var solution = [
//     letters[getRandomInt(0, letters.length)],
//     letters[getRandomInt(0, letters.length)],
//     letters[getRandomInt(0, letters.length)],
//     letters[getRandomInt(0, letters.length)]
// ].join('');

function insertCode(pattern) {

	var splitPattern = pattern.split('');

	board[numTry][0] = splitPattern[0];
	board[numTry][1] = splitPattern[1];
	board[numTry][2] = splitPattern[2];
	board[numTry][3] = splitPattern[3];

	var message = computeMessage(splitPattern);

	board[numTry].push(message);
	printBoard();

	numTry++;
}


function computeMessage(splitPattern) {

	var splitSolution = solution.split('');
	var letterSpacesCorrect = 0;
	var lettersCorrect = 0;

	if (splitPattern[0] === splitSolution[0]) {
    	letterSpacesCorrect += 1;
	}

	if (splitPattern[1] === splitSolution[1]) {
    	letterSpacesCorrect += 1;
	}

	if (splitPattern[2] === splitSolution[2]) {
    	letterSpacesCorrect += 1;
	}

	if (splitPattern[3] === splitSolution[3]) {
    	letterSpacesCorrect += 1;
	}

	if (splitSolution.indexOf(splitPattern[0]) > -1) {
    	lettersCorrect += 1;
	}

	if (splitSolution.indexOf(splitPattern[1]) > -1) {
    	lettersCorrect += 1;
	}
	if (splitSolution.indexOf(splitPattern[2]) > -1) {
    	lettersCorrect += 1;
	}

	if (splitSolution.indexOf(splitPattern[3]) > -1) {
    	lettersCorrect += 1;
	}

	return colors.red(letterSpacesCorrect) + ' - ' + lettersCorrect;
}

function checkSolution(pattern){
	if (pattern === solution){
		console.log(pattern + ' is the solution!')
		return true;
	} else{
		return false;
	}

}

//Call your functions

generateRandomCode();
printBoard();
getPrompt();

function getPrompt() {
    prompt.get(['pattern'], function (error, result) {
    	var result = result['pattern'];
    	//console.log(generateRandomCode(solution) );
        //console.log('solution ', solution);
        console.log('input recieved: ' + result);
        //check pattern 
    	insertCode(result);

	    if (checkSolution(result) == true) {
	    	return false;
	    }
	    if (numTry > 9){
	    	console.log('You ran out of turns! Try again...')
	    	return false;
	    }

    	getPrompt();
    });
}

var numTry = 0;
