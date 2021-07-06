const canvas = document.getElementById('canvas');
const decrBtn = document.getElementById('decr');
const incrBtn = document.getElementById('incr');
const clearBtn = document.getElementById('clear');
const colorBtn = document.getElementById('color');
const sizeEl = document.getElementById('size');

const ctx = canvas.getContext('2d');

let radius = 10;
let isPressed = false;
let x, y;
let color = '#000';

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
	drawCircle(x, y);
});
canvas.addEventListener('touchstart', (e) => {
	x = e.offsetX;
	y = e.offsetY;
	drawCircle(x, y);
});

canvas.addEventListener('touchend', (e) => {});

canvas.addEventListener('mouseup', (e) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		x1 = e.offsetX;
		y1 = e.offsetY;
		drawCircle(x1, y1);
		drawLine(x, y, x1, y1);
		x = x1;
		y = y1;
	}
});
canvas.addEventListener('touchmove', (e) => {
	if (!x) {
		return;
	}
	x1 = e.offsetX;
	y1 = e.offsetY;
	drawCircle(x1, y1);
	drawLine(x, y, x1, y1);
	x = x1;
	y = y1;
});

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = radius * 2;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fill();
}

decrBtn.addEventListener('click', () => {
	radius -= 2;
	if (radius < 0) {
		radius = 0;
	}
	sizeEl.innerText = radius;
});
incrBtn.addEventListener('click', () => {
	radius += 2;
	if (radius > 30) {
		radius = 30;
	}
	sizeEl.innerText = radius;
});
colorBtn.addEventListener('change', (e) => {
	color = e.target.value;
});

clearBtn.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
