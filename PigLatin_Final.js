'use strict';
var prompt = require('prompt');
prompt.start();

prompt.get(['name'], function(error, result) {
	

	var word = result.name;
	var lastIndex = word.length;
	var vowelIndex = word.length;

if (word.indexOf("a") > -1 && word.indexOf("a") < vowelIndex) {
    vowelIndex = word.indexOf("a");
}
if (word.indexOf("e") > -1 && word.indexOf("e") < vowelIndex) {
    vowelIndex = word.indexOf("e");
}
if (word.indexOf("i") > -1 && word.indexOf("i") < vowelIndex) {
    vowelIndex = word.indexOf("i");
}
if (word.indexOf("o") > -1 && word.indexOf("o") < vowelIndex) {
    vowelIndex = word.indexOf("o");
}
if (word.indexOf("u") > -1 && word.indexOf("u") < vowelIndex) {
    vowelIndex = word.indexOf("u");
}

	var firstPart = word.slice(0, vowelIndex);
	var restWord = word.slice(vowelIndex, lastIndex);

	console.log(restWord + firstPart + 'ay!');	

});

 



