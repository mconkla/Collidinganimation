let balls = []
let obst;


function setup() {
  	createCanvas(600,600);
  	obst = new Obst();
	//extraC = createGraphics(600,200);
	
}

function draw() {
	background(0);
	obst.show();

	for(var i = 0; i < balls.length; i++){
		balls[i].show();
		balls[i].update();

		if(balls[i].hit(obst)){
				console.log("SUCCES");
				//balls[i].speedY *= -1 ;
				//balls[j].speedY *= -1 ;
				//balls[i].speedX *= -1 ;
				//balls[j].speedX *= -1 ;
		}
		
		for (var j = i; j < balls.length ; j++){
			var comp = dist(balls[i].x,balls[i].y,balls[j].x,balls[j].y);
			//console.log(comp);
			//if(dist(balls[i].x,balls[i].y,balls[j].x,balls[j].y) < 1.0){
			//	background(255);
			//}
			if (comp < 15){
				console.log(comp);
				var temp = balls[i].speedY;
				balls[i].speedY = balls[j].speedY;
				balls[j].speedY = temp;

				var temp2 = balls[i].speedX;
				balls[i].speedX = balls[j].speedX;
				balls[j].speedX = temp2;
				
			}
				

			
		}
	}
	
	
fill(255);
	text("Testing", width - 50, 10, 100, 110);
}
	

  // put drawing code here

function keyPressed(){
	if (key = " "){
		console.log("SPACE");

	}
}
function mouseClicked(){
	balls.push(new Ball());

}
function mousePressed(){

}
