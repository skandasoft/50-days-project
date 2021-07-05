const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = e.offsetY + 'px';
		circle.style.left = e.offsetX + 'px';
		e.currentTarget.appendChild(circle);
		setTimeout(() => circle.remove(), 500);
	});
});
