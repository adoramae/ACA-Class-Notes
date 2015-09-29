var outsideVar = 'Hello';

function helloWorld() {
  var insideVar = 'World';
  return outsideVar + insideVar;
}

console.log(helloWorld());

//Ternary

var light = 'on';

function toggleLight() {
  light = (light === 'on') ? 'off' : 'on';
}

toggleLight();

// var a = 3;
// 	// if (a  <2){
// 	// 	a = 5 }
// 	// else {a = 1}

// 	// }

// 	a = (a < 2) ? 5 : 1
// 	 console.log(a);

