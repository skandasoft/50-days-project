let upBtn = document.querySelector('.btn.up');
let downBtn = document.querySelector('.btn.down');
let slideLeft = document.querySelector('.left-slide');
let slideRight = document.querySelector('.right-slide');
let slideLength = slideRight.querySelectorAll('div').length;
let curr = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

downBtn.addEventListener('click', () => changeSlide('down'));
upBtn.addEventListener('click', () => changeSlide('up'));

const changeSlide = (direction) => {
	if (direction === 'up') {
		curr++;
		if (curr > slideLength - 1) {
			curr = 0;
		}
	} else {
		curr--;
		if (curr < 0) {
			curr = slideLength - 1;
		}
	}
	slideRight.style.transform = `translateY(-${curr * 100}vh)`;
	slideLeft.style.transform = `translateY(${curr * 100}vh)`;
};
