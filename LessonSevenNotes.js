//always capitalize the first letter of a class name.

function Car (color) {
	this.color = color;
	this.tires = 4;

	this.drive = function(){
		console.log('VROOM!');
	}

}

function Driveway(maxCars) {
	this.cars = [];
	this.maxCars = maxCars;

	this.parkHere = function(car){
		if (this.cars.length < maxCars){
		    this.cars.push(car);
		} else {
			console.log("Driveway is Full");
		}
	}
}



// instance of a car:
// var redCar = new Car ('red');

//push a car into the driveway -- make driveway a variable name
//driveway.cars.push(redCar);

//See the car in the driveway
// driveway.car
//_________________________________

//Things to look up

//underscore
