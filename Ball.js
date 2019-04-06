function Ball(hello){
	this.x = mouseX;
	this.y = mouseY;
	this.r = random(0,255);
	this.g = random(0,255);
	this.b = random(0,255);
	this.speedY = 5 ;
	this.speedX = 5;

	this.show = function () {
		noStroke();
		fill(this.r,this.g,this.b);
		ellipse(this.x,this.y,30,30);

	}

	this.update = function(){
		this.y += this.speedY;
		this.x += this.speedX;

		if (this.y > height){
			this.speedY = -5;
		}
		if (this.y < 0){
			this.speedY = 5;
		}
		
		if (this.x > width){
			this.speedX = -5;
		}
		if(this.x < 0){
			this.speedX = 5;

		}
		

	}

	this.hit = function(obstacle){
		//var temp = dist(this.x,this.y,obstacle.x,obstacle.y);

		var temp = (this.y + 20 > obstacle.y && this.x + 20 > obstacle.x && this.x - 20 < obstacle.x + obstacle.w && this.y - 20 < obstacle.y + obstacle.h);

		//var nemp = (this.x + 15 >= obstacle.x && this.y + 15 >= obstacle.y && this.y - 15 <= obstacle.y + obstacle.h  && this.x - 15 <= obstacle.x + obstacle.w);
		
		if (temp){
			if(this.y < obstacle.y || this.y > obstacle.y + obstacle.h){
				this.x = this.x + 1;
				this.speedY *= -1;
			}
			else if (this.x < obstacle.x || this.x > obstacle.x + obstacle.w){
				this.y = this.y + 1;
				this.speedX *= -1;
			}
			
			return true;
		}
		
		
		
		

	}






}