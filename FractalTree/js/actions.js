function setup(){
	createCanvas(800,600);
}

function draw(){
	var angle = PI / 4;
	var length = 100;
	var offset = .6;

	background(51);
	stroke(255);
	translate(400, height);
	drawTrunk(length);
	push();
	branch(length, offset, angle);
	pop();
	branch(length, offset, -angle);
	
}

function branch(len, off, ang){
	if (len > 4) {
		rotate(ang);
		line(0, 0, 0, -len);
		translate(0, -len);
		push();
		branch(len * off, off, ang);
		pop();
		branch(len  * off, off,  -ang);
	}
}

function drawTrunk(len){
	line(0,0,0,-len);
	translate(0,-len);
	push();
}