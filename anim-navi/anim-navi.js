const closeBtn = document.querySelector('#close');
const nav = document.querySelector('nav');
closeBtn.addEventListener('click', () => {
	nav.classList.toggle('active');
});
