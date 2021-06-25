const boxes = document.querySelectorAll('.box');

const pullBox = function () {
	boxes.forEach((box) => {
		let { bottom } = box.getBoundingClientRect();
		// if bounding box co-ordinates within in vh and vw
		if (bottom < document.documentElement.clientHeight) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
};
pullBox();
window.addEventListener('scroll', pullBox);
