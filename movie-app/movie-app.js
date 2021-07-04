const closeBtn = document.querySelector('#close');
const apikey = '776e9e14ff42a286795eea12f2285b0c';
const API_URL =
	'https://api.themoviedb.org/3/movie/popular?api_key=776e9e14ff42a286795eea12f2285b0c&language=en-US&page=1';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=776e9e14ff42a286795eea12f2285b0c&language=en-US&page=1&include_adult=false&&query="';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();
	console.log(data.results);
	showMovies(data.results);
}

function showMovies(movies) {
	if (movies?.length === 0) {
		alert('no movies found');
		return;
	}
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie-card');
		movieEl.innerHTML = `
		<img src="${IMG_PATH}${poster_path}" alt="" class="movie-img" />
		<div class="movie-info">
			<div class="movie-title">${title}</div>
			<span class="movie-rating ${getClassByRate(vote_average)}">${vote_average}</span>
		</div>
		<div class="movie-overview">
			<h3 class="title">Overview</h3>
			<p>${overview}</p>
		</div>


		`;
		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'orangered';
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;
	if (searchTerm.trim()) {
		getMovies(SEARCH_API + searchTerm + '"');
		search.value = '';
	} else {
		window.location.reload();
	}
});
