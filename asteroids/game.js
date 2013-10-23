(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {})

	var Game = Asteroids.Game = function(canvas) {
		this.ctx = canvas.getContext("2d");
		this.asteroids = [];
		this.addAsteroids(40);
		this.ship = new Asteroids.Ship([WIDTH / 2, HEIGHT / 2]);
		this.bindKeyHandlers();
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
		this.ship.draw(that.ctx);
		this.asteroids.forEach( function(asteroid) {
			asteroid.draw(that.ctx);
		});
	}

	Game.prototype.move = function() {
		this.ship.move();
		var onScreenAsteroids = [];
		this.asteroids.forEach( function(asteroid) {
			asteroid.move();
			if(asteroid.onScreen(WIDTH, HEIGHT)){
				onScreenAsteroids.push(asteroid);
			}
			else{
				//delete asteroid;//How to remove asteroid?
			}
		});
		this.asteroids = onScreenAsteroids;
	}

	Game.prototype.step = function() {
		this.move();
		this.checkCollisions();
		this.draw();
	}

	Game.prototype.start = function() {
		setInterval(this.step.bind(this), 30 )
	}

	Game.prototype.checkCollisions = function() {
		var that = this;
		this.asteroids.forEach( function(asteroid) {
			if (asteroid.isCollidedWith(that.ship)) {
				that.ship.explode();
				alert("Game Over!")
			}
		});
	}

	Game.prototype.bindKeyHandlers = function(){
		key('up', function(){ this.power([0,-1]);}.bind(this.ship));
		key('down', function(){ this.power([0,1]);}.bind(this.ship));
		key('left', function(){ this.power([-1,0]);}.bind(this.ship));
		key('right', function(){ this.power([1,0]);}.bind(this.ship));

	}
})(this);