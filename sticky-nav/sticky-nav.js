let navEl = document.getElementById('main-nav');
let homeEl = document.querySelector('#home a');
window.addEventListener('scroll', (e) => {
	if (window.scrollY > navEl.offsetHeight + 150) {
		navEl.classList.add('active');
		homeEl.classList.add('current');
	} else {
		homeEl.classList.remove('current');
		navEl.classList.remove('active');
	}
});
