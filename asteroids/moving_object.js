(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var MovingObject = Asteroids.MovingObject = function(startPos, vel, radius, color){
		this.x = startPos[0];
		this.y = startPos[1];
		this.dx = vel[0];
		this.dy = vel[1];
		this.radius = radius;
		this.colour = color;
	}

	MovingObject.prototype.move = function(){
		this.x += this.dx;
		this.y += this.dy;
	}


	MovingObject.prototype.draw = function(ctx){
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y,
			this.radius,
			0,
			2 * Math.PI
		);
		ctx.fill()
	}

	MovingObject.prototype.isCollidedWith = function(otherObject) {
		var diffX = Math.pow((this.x - otherObject.x), 2);
		var diffY = Math.pow((this.y - otherObject.y), 2);
		var distance = Math.sqrt(diffX + diffY);
		return ((this.radius + otherObject.radius) > distance);
	}

	MovingObject.prototype.onScreen = function(dimX, dimY){

		if(this.x - this.radius > dimX){
			return false;
		}
		else if(this.x + this.radius < 0){
			return false;
		}
		else if(this.y - this.radius > dimY){
			return false;
		}
		else if(this.y + this.radius < 0){
			return false;
		}

		return true;
	}

	MovingObject.randomBetween = function(min, max) {
  return Math.random() * (max - min) + min;
}

})(this);