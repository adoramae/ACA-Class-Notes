'use strict';
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.


var arr = [];

for (var i = 0; i < 1000; i++){
		arr.push(i);
	}

var totalOfArr = 0
for (var j = 0; j < arr.length; j++){
	if (arr[j] % 3 === 0 || arr[j] % 5 === 0) {
		totalOfArr = totalOfArr + arr[j];
	}
}

//console.log(arr);
console.log(totalOfArr)