(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Ship = Asteroids.Ship = function(startPos) {
		Asteroids.MovingObject.call(this, startPos, [0,0], RADIUS, COLOR);
	}

	Ship.inherits(Asteroids.MovingObject);

	var RADIUS = Ship.RADIUS = 10;
	var COLOR = Ship.COLOR = "green";
	var MAX_VEL = Ship.MAX_VEL = 10;

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
})(this);