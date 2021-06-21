let images = document.querySelectorAll('.img');
let removeActiveClasses = function () {
	Array.from(images).forEach((image) => {
		image.classList.remove('active');
	});
};

images.forEach((image) => {
	image.addEventListener('click', () => {
		removeActiveClasses();
		image.classList.add('active');
	});
});
