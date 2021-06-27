let counters = document.querySelectorAll('.social-count');
counters.forEach((counter) => {
	counter.innerText = 0;
	const target = +counter.getAttribute('data-target');
	function increment() {
		const incr = target / 400;
		if (target > +counter.innerText) {
			counter.innerText = Math.ceil(+counter.innerText + incr);
		} else {
			counter.innerText = target;
		}
	}
	setInterval(increment, 1);
});
