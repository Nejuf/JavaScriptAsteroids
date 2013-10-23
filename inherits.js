Function.prototype.inherits = function(superClass) {
	var Surrogate = function() {}
	Surrogate.prototype = superClass.prototype;
	this.prototype = new Surrogate();
}

// function MovingObject() {};
//
// function Ship () {};
// Ship.inherits(MovingObject);
//
// function Asteroid () {};
// Asteroid.inherits(MovingObject);
//
//
//
// MovingObject.prototype.move = function(){
// 	console.log("move");
// }
//
// Ship.prototype.explode = function(){
// 	console.log("explode");
// }
//
// Asteroid.prototype.divide = function(){
// 	console.log("divide");
// }
//
//
//
// var ship = new Ship();
// var asteroid = new Asteroid();
//
// console.log("\nTypes");
// console.log(Ship.prototype.prototype);
// console.log(Asteroid.prototype);
//
// console.log("\nProtos");
// console.log(ship.__proto__);
// console.log(ship.__proto__.__proto__);
//
//
// console.log("\nMethods")
// ship.move();
// ship.explode();
// // ship.divide();//should not work
//
// asteroid.move();
