'use strict';

var prompt = require('prompt');
prompt.start();

var board = [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ];

function printboard(){
	console.log(board[0].join(' | ') );
	console.log('_________');
	console.log(board[1].join(' | ') );
	console.log('_________');
	console.log(board[2].join(' | ') );
};

//printboard();

var playerTurn = 'X';

function placeMark(result) {
  var row_idx = parseInt(result['row'], 10);
  var col_idx = parseInt(result['column'], 10);
  board[row_idx][col_idx] = playerTurn;
}

function getPrompt() {
	console.log("It's Player " + playerTurn + "'s turn.");	
  	prompt.get(['row', 'column'], function (error, result) {
  	    if (result['row'] == 'exit' || result['column'] == 'exit') {
            return false;
        }
 		placeMark(result);
 		if (checkforWin()){
 			return false;
 		}
 		playerTurn = (playerTurn === 'X') ? '0' : 'X';
        printboard();
        getPrompt();
    });
 }; 


printboard();
getPrompt();

function horizontal(){
	return (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
           (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
           (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);

}

function vertical(){
	return (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
           (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
           (board[0][2] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
	
}

function diagonal(){
	return (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
           (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn);
	
}

function checkforWin() {
	if (horizontal() || vertical() || diagonal()) {
		console.log('Player ' +  playerTurn + ' Won!');
		// printboard();
		return true;
    }
    return false;
}

	

