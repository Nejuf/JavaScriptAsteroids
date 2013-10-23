(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var MovingObject = function(startPos, vel, radius, color){
		this.x = startPos[0];
		this.y = startPos[1];
		this.pos = startPos;//[x,y]
		this.velocity = vel;//[dx,dy]
		this.radius = radius;
		this.colour = color;
	}

	MovingObject.prototype.move = function(){
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}


	MovingObject.prototype.draw = function(ctx){
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2*Math.PI
		);
		ctx.fill()
	}

	MovingObject.prototype.isCollidedWith = function(otherObject) {
		var diffX = (this.x - otherObject.x)**2;
		var diffY = (this.y - otherObject.y)**2;
		var distance = Math.sqrt(diffX + diffY);
		return (this.radius + otherObject.radius) > distance;
	}


})(this);