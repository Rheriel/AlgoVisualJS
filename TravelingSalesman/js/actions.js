var cities = [];
var totalCities = 8;
var recordDistance;
var bestEver = []; 

function setup(){
	createCanvas(400,300);
	for (var i = 0; i < totalCities; i++){
		var v = createVector(random(width), random(height));
		cities[i] = v;
	}

	var d = calculateDistance(cities);
	recordDistance = d;
	bestEver = cities;
}

function draw(){

	// Black background
	background(0);

	// Draws vertex
	fill(255);
	for (var i = 0; i < cities.length; i++) {
		ellipse(cities[i].x, cities[i].y, 8, 8);
	}

	// Draws edges
	stroke(255);
	strokeWeight(2);
	beginShape();
	noFill();
	for(var i = 0; i < cities.length; i++){
		vertex(cities[i].x, cities[i].y);
	}
	endShape();

	var i = floor(random(cities.length));
	var j = floor(random(cities.length));
	swap(cities, i, j);

	var d = calculateDistance(cities);

	if (d < recordDistance){
		recordDistance = d;
		bestEver = cities.slice();
		console.log(recordDistance);
	}

	stroke('rgb(100%,0%,10%)');
	strokeWeight(3);
	beginShape();
	noFill();
	for(var i = 0; i < bestEver.length; i++){
		vertex(bestEver[i].x, bestEver[i].y);
	}
	endShape();
}


function swap(a, i, j){
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function calculateDistance(points){
	var sum = 0;
	for (var i = 0; i < points.length - 1; i++) {
		var d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
		sum+=d;
	}
	return sum;
}