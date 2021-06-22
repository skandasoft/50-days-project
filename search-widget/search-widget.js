const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.fa-search');

searchIcon.addEventListener('click', () => {
	searchInput.classList.toggle('show');
	searchInput.focus();
});
