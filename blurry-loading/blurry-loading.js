const loadingText = document.querySelector('.loadingText');
const bg = document.getElementById('bg');
let no = parseInt(loadingText.innerText);
let blurVal = getComputedStyle(bg).getPropertyValue('filter').match(/(\d+)/)[0]; //20;
let finalVal = 100;

let intervalId = setInterval(() => {
	loadingText.innerText = `${++no}%`;
	let blurPixel = blurVal - (blurVal * no) / finalVal;
	bg.style.filter = `blur(${blurPixel}px)`;
	loadingText.style.opacity = 1 - no / 100;
	if (no === finalVal) {
		loadingText.style.display = 'none';
		clearInterval(intervalId);
	}
}, 30);
