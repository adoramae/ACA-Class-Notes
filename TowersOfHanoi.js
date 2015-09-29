'use strict';

var prompt = require('prompt');
prompt.start();

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []	
};

printStacks();
getPrompt();

function getPrompt() {
  prompt.get(['start', 'finish'], function (error, result) {
  	if (result['start'] == 'exit' || result['finish'] == 'exit'){
       return false;
  	}
  	if (isLegal(result['start'], result['finish'])){   
  		moveBlock(result['start'], result['finish']);
  	}
    if (!gameOver()){
       printStacks();	
       getPrompt();
}      else {
	     console.log('You win!')
	     printStacks();
}
  });
}


function printStacks(){
  console.log('a: ' + stacks.a);
  console.log('b: ' + stacks.b);
  console.log('c: ' + stacks.c);
};

function isLegal(start, finish){
var lastIndex = stacks[start].length -1;
var nextNumber = stacks[finish].length -1;
var startingNumber = stacks[start][lastIndex];
var endingNumber = stacks[finish][nextNumber];

	  if (startingNumber < endingNumber || !endingNumber ) {
		return true;
	} 
	  else {
	  	console.log('That move is not allowed, try a different move.')	
		return false;
	}
}

function moveBlock(start, finish){
	var takeLast = stacks[start].pop();
    stacks[finish].push(takeLast);
};

 function gameOver(){
if (stacks.b.length === 4 || stacks.c.length === 4){
 		return true;
 	} else {
 		return false;
 	}
 }