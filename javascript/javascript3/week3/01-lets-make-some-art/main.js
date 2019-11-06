let randomX = 0;
let randomY = 0;
let randomRadius = 0;
let randomColor = "";

class Circle {
	constructor(x, y, r, startAngle, endAngle, fillColor) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.startAngle = startAngle;
		this.endAngle = endAngle;
		this.fillColor = fillColor;
	}
	draw() {
		const c = document.getElementById("myCanvas");
		const ctx = c.getContext("2d");
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y,
			this.r,
			this.startAngle,
			this.endAngle,
			this.fillColor
		);
		ctx.fillStyle = this.fillColor;
		ctx.fill();
	}
}

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeArt() {
	randomX = randomIntFromInterval(0, window.innerWidth);
	randomY = randomIntFromInterval(0, window.innerHeight);
	randomRadius = randomIntFromInterval(0, 150);
	randomColor =
		"#" + ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
	const c1 = new Circle(
		randomX,
		randomY,
		randomRadius,
		0,
		2 * Math.PI,
		randomColor
	);
	c1.draw();
}

setInterval(makeArt, 500);
