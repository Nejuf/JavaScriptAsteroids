(function(root) {

	var Asteroids = root.Asteroids = (root.Asteroids || {});


	var Bullet = Asteroids.Bullet = function(startPos, vel) {
		Asteroids.MovingObject.call(this, startPos, vel, RADIUS, COLOR);

	}

	Bullet.inherits(Asteroids.MovingObject);

	var COLOR = Bullet.COLOR = "red";
	var RADIUS = Bullet.RADIUS = 4;


	Bullet.prototype.hitAsteroids = function(asteroids){
		var that = this;
		var asters = [];
		asteroids.forEach(function(asteroid){

				if(asteroid.isCollidedWith(that)){
					asters.push(asteroid);
					return;
				}
		});
		return asters[0];
	}
})(this);