'use strict';

//Build the Board
var board = [];
  for (var i=0; i<10; i++){
     board.push([' ',' ',' ',' ']);//.join(' '));
  }

function printBoard(){
	console.log(board);
};

//Prompt User Input
var prompt = require('prompt');
prompt.start();

function getPrompt() {
    prompt.get(['pattern'], function (error, result) {
        console.log('input recieved: ' + result.pattern);
       //check pattern 
    insertCode(result.pattern);

    if ( checkSolution(result.pattern) == true ){
    	return;
    }

        getPrompt();
    });
}

function insertCode(pattern){
	var numTry = j;
    for (var j=0; j<10; j++){
     return j;
    }
var splitPattern = result['pattern'].split(' ');
board[numTry][0] = splitPattern[0];
board[numTry][1] = splitPattern[1];
board[numTry][2] = splitPattern[2];
board[numTry][3] = splitPattern[3];
board[numTry][4] = splitPattern[4];
board[numTry][5] = splitPattern[5];
board[numTry][6] = splitPattern[6];
board[numTry][7] = splitPattern[7];
board[numTry][8] = splitPattern[8];
board[numTry][9] = splitPattern[9];

}

var splitSolution = solution.split('');
var lettersSpacesCorrect = 0;
var lettersCorrect = 0;

function splitSolution(splitPattern){

}

var solution = 'abcd'

function checkSolution(pattern){
	if (pattern = solution){
		console.log(pattern + ' is the solution!')
		return true;
	} else{
		return false;
	}

}



//Call your functions

printBoard();
getPrompt();
