// A palindromic number reads the same both ways. The largest palindrome made from the product of 
// two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var arr =[];

var test;

function itter() {
	for (var i = 999; i > 0; i--) {
		// test.push(i.split());

	for (var j = 999; j > 0; j--) {
			var product = i * j;
			test = String(product).split("");
			checker();		
		}
	}	
};

function checker() {
	if (test.length === 6  && test[0] === test[test.length - 1] && test[1] === test[test.length - 2] && test[2] === test[test.length - 3]){
		arr.push(test);
		//console.log(test);
	}
};

function sorty() {
	arr.sort();
	console.log(arr[arr.length-1]);
}

itter();
sorty();
