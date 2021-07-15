let navEl = document.getElementById('nav');
let home = document.getElementById('home');
window.addEventListener('scroll', (e) => {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
});
