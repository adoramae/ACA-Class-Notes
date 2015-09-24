'use strict';

var prompt = require('prompt')
prompt.start()

prompt.get(['hand1', 'hand2'], function(error, result){
	//console.log('First Hand: ' + result['hand1']);
	//console.log('Second Hand: ' + result['hand2']);	

	var hand1 = result.hand1;
	var hand2 = result.hand2;
	var rock = 'rock';
	var paper = 'paper';
	var scissors = 'scissors';	
;
	if (hand1 === hand2){
		console.log("It's a tie!")
	}

	//paper and rock
	else if (hand1 === rock && hand2 === paper){
		console.log("Player Two wins with Paper!")
	}
	else if (hand1 === paper && hand2 === rock){
		console.log("Player One wins with Paper!")
	}

	//paper and scissors
	else if (hand1 === paper && hand2 === scissors){
		console.log("Player Two wins with Scissors!")
	}
	else if (hand1 === scissors && hand2 === paper){
		console.log("Player One wins with Scissors!")
	}

	//scissors and rock
	else if (hand1 === scissors && hand2 === rock){
		console.log("Player Two wins with Rock!")
	}
	else if (hand1 === rock && hand2 === scissors){
		console.log("Player One wins with Rock!")
	}

	else{
		console.log('Someone played something other than rock, paper, or scissors!')
	}

});