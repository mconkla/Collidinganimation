function Obst(){
	this.x = width/2;
	this.y = height/2;
	this.w = 100;
	this.h = 50;

	this.show = function(){
		fill(255,0,0);
		noStroke();
		rect(this.x,this.y,this.w,this.h);

	}



}