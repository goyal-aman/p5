var x = 0;
var y = 155;
var z = 255;
var dx = 0
var dy = 2;
var dz = 1

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 14, 255)
}

function draw() {
	background(x, y, z)
	x += dx
	y += dy
	z += dz
	if (x > 255 || x < 0) {
		dx *= -1
		// dx += 1
		// if (dx + x > 255) {
			// dx = 1
		// }
	}
	if (y > 255 || y < 0) {
		dy *= -1
		// dy += 1
		// if (dy + y > 255) {
		// 	dx = 1
		// }

	}
	if (z > 255 || z < 0) {
		dz *= -1
		// dz += 1
		// if (dz + z > 255) {
		// 	dx = 1
		// }

	}
}