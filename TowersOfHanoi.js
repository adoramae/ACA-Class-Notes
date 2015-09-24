'use strict';

var prompt = require('prompt');
prompt.start();

function getPrompt() {
  prompt.get(['start', 'finish'], function (error, result) {
  	//if (gameOver()){
  	//	return false;
  	//}
  	if (result['start'] || result['finish'] == 'exit'){
  		return false;
  	}
  	printStacks();
    getPrompt();
  });
}

// var start = result['start'];
// var finish = result['finish'];

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []	
};

function printStacks(){
  console.log('a: ' + stacks.a);
  console.log('b: ' + stacks.b);
  console.log('c: ' + stacks.c);
};

// function isLegal(start, finish){
// 	if (start.length > finish.length) {
// 		return true;
// 	} else {
// 		return false;
// 		console.log ('That is not a legal move');
// 	}
// }

function moveBlock(start, finish){
	var takeFirst = stacks.start.pop();
    stacks.finish.push(takeFirst);
};

// function gameOver(){
// 	if (stacks.a.length == 0 && stacks.b.length == 0 && stacks.c.length == 4){
// 		console.log('You did it!');
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

getPrompt();
//isLegal();
moveBlock();
//gameOver();
printStacks();
