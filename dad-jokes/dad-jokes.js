const labels = document.querySelectorAll('label');
labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => {
			return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
		})
		.join('');
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
	input.addEventListener('focus', () => {
		let children = Array.from(input.nextElementSibling.children);
		children.forEach((child) => {
			child.classList.add('move');
		});
	});
	input.addEventListener('blur', () => {
		if (input.value) return;

		let children = Array.from(input.nextElementSibling.children);
		children.forEach((child) => {
			child.classList.remove('move');
		});
	});
});
