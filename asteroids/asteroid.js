(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Asteroid = Asteroids.Asteroid = function(startPos, vel){
		Asteroids.MovingObject.call(this, startPos, vel, RADIUS, COLOR);
	}

	Asteroid.inherits(Asteroids.MovingObject);

	var COLOR = Asteroid.COLOR = "black";
	var RADIUS = Asteroid.RADIUS = 20;
	var MAX_VEL = Asteroid.MAX_VEL = 2;

	Asteroid.randomAsteroid = function(dimX, dimY){
		var startX = Math.random() * dimX;
		var startY = Math.random() * dimY;
		var velX = Asteroids.MovingObject.randomBetween(-MAX_VEL, MAX_VEL);
		var velY = Asteroids.MovingObject.randomBetween(-MAX_VEL, MAX_VEL);

		return new Asteroid([startX, startY], [velX, velY]);
	}

	// Asteroid.prototype.onScreen = function(dimX, dimY){
	//
	// 	if(this.x - this.radius > dimX){
	// 		return false;
	// 	}
	// 	else if(this.x + this.radius < 0){
	// 		return false;
	// 	}
	// 	else if(this.y - this.radius > dimY){
	// 		return false;
	// 	}
	// 	else if(this.y + this.radius < 0){
	// 		return false;
	// 	}
	//
	// 	return true;
	// }

})(this);