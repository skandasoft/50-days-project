let steps = document.querySelectorAll('.circle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progressLine = document.getElementById('progress-line');
let current = 1;

let update = function () {
	steps.forEach((step, idx) => {
		if (idx < current) {
			step.style.transitionDelay = '.45s';
			step.classList.add('active');
		} else {
			step.style.transitionDelay = '0s';
			step.classList.remove('active');
		}

		if (current === 1) {
			prev.disabled = true;
		} else if (current === steps.length) {
			next.disabled = true;
		} else {
			next.disabled = false;
			prev.disabled = false;
		}

		progressLine.style.width = ((current - 1) / (steps.length - 1)) * 100 + '%';
	});
};

next.addEventListener('click', (e) => {
	current++;
	if (current > steps.length) {
		current = steps.length;
	}

	update();
});

prev.addEventListener('click', (e) => {
	current--;
	if (current < 1) {
		current = 1;
	}
	update();
});
