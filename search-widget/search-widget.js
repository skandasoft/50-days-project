const searchInput = document.getElementById('search');
const searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', () => {
	searchInput.classList.toggle('show');
});
