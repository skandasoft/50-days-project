const labels = document.querySelectorAll('label');
labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter) => {
			return `<span>${letter}</span>`;
		})
		.join('');
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
	input.addEventListener('focus', () => {
		input.nextElementSibling.classList.add('move');
	});
	input.addEventListener('blur', () => {
		input.nextElementSibling.classList.remove('move');
	});
});
