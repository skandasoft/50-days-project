let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('#slider-btns .fas');
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		slides[currentSlide].classList.remove('active');
		if (e.currentTarget.classList.contains('left')) {
			if (slides[currentSlide].previousElementSibling) {
				currentSlide--;
			} else {
				currentSlide = slides.length - 1;
			}
		} else {
			if (slides[currentSlide].nextElementSibling) {
				currentSlide++;
			} else {
				currentSlide = 0;
			}
		}
		document.body.style.backgroundImage = `
		linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		${slides[currentSlide].style.backgroundImage}
		`;
		slides[currentSlide].classList.add('active');
	});
});
