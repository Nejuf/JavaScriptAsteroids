(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {})

	var Game = Asteroids.Game = function(canvas) {
		this.ctx = canvas.getContext("2d");
		this.asteroids = [];
		this.addAsteroids(40);

	}

	var WIDTH = Game.WIDTH = 640;
	var HEIGHT = Game.HEIGHT = 480;

	Game.prototype.addAsteroids = function(numAsteroids) {
		for(var i = 0; i < numAsteroids; i++) {
			var asteroid = Asteroids.Asteroid.randomAsteroid(WIDTH, HEIGHT);
			this.asteroids.push(asteroid);
		}
	}

	Game.prototype.draw = function() {
		this.ctx.clearRect(0,0, WIDTH, HEIGHT);
		var that = this;
		this.asteroids.forEach( function(asteroid) {
			asteroid.draw(that.ctx);
		});
	}

	Game.prototype.move = function() {
		this.asteroids.forEach( function(asteroid) {
			asteroid.move();
		});
	}

	Game.prototype.step = function() {
		this.move();
		this.draw();
	}

	Game.prototype.start = function() {
		setInterval(this.step.bind(this), 30 )
	}


})(this);