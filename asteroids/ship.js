(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Ship = Asteroids.Ship = function(startPos) {
		Asteroids.MovingObject.call(this, startPos, [0,0], RADIUS, COLOR);
	}

	Ship.inherits(Asteroids.MovingObject);

	var RADIUS = Ship.RADIUS = 10;
	var COLOR = Ship.COLOR = "green";
	var MAX_VEL = Ship.MAX_VEL = 5;

	Ship.prototype.power = function(impulse){
		this.dx += impulse[0];
		this.dy += impulse[1];
		if(this.dx < -MAX_VEL){
			this.dx = -MAX_VEL;
		}
		if(this.dy < -MAX_VEL){
			this.dy = -MAX_VEL;
		}
		if(this.dx > MAX_VEL){
			this.dx = MAX_VEL;
		}
		if(this.dy > MAX_VEL){
			this.dy = MAX_VEL;
		}
	}

	Ship.prototype.explode = function(){
		this.colour = "red";
	}

	Ship.prototype.fireBullet = function() {
		if( this.dx != 0 || this.dy != 0 ) {
			return new Asteroids.Bullet([this.x, this.y], [this.dx * 3, this.dy * 3]);
		}
	}

	Ship.prototype.keepOnScreen = function(dimX, dimY) {

		if(this.x - this.radius > dimX){
			this.x = -this.radius;
		}
		else if(this.x + this.radius < 0){
			this.x = dimX + this.radius;
		}
		else if(this.y - this.radius > dimY){
			this.y = -this.radius;
		}
		else if(this.y + this.radius < 0){
			this.y = dimY + this.radius;
		}

	}
})(this);