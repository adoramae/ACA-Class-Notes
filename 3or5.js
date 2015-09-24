//3 or 5
'use strict';

var prompt = require('prompt');

prompt.start()

prompt.get(['number'], function (error, result) {
  var num = parseInt(result['number']);


if (num % 3 === 0 && num % 5 === 0){
	console.log(num + ' is divisible by 3 and 5!')
} else if (num % 3 === 0){
	console.log(num + ' is divisible by 3!')
} else if (num % 5 ===0){
	console.log (num + ' is divisible by 5!')
}
  else {
  	console.log('Nice number, but it cannot divide by 3 or 5!')
  }

// if (num % 3 === 0 && num % 5 === 0){
// 	console.log('fizz buzz')
// } else if (num % 3 === 0){
// 	console.log('fizz')
// } else if (num % 5 === 0){
// 	console.log ('buzz')
// }
// else {
// 	console.log('you can neither fizz nor buzz, baby!')
// }

});