(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Asteroid = Asteroids.Asteroid = function(startPos, vel){
		Asteroids.MovingObject.call(this, startPos, vel, RADIUS, COLOR);
	}

	var COLOR = Asteroid.COLOR = "black";
	var RADIUS = Asteroid.RADIUS = 20;
	var MAX_VEL = Asteroid.MAX_VEL = 10;

	Asteroid.inherits(Asteroids.MovingObject);

	Asteroid.randomAsteroid = function(dimX, dimY){
		var startX = Math.random() * dimX;
		var startY = Math.random() * dimY;
		var velX = Math.random() * MAX_VEL;
		var velY = Math.random() * MAX_VEL;

		return new Asteroid([startX, startY], [velX, velY]);
	}



})(this);