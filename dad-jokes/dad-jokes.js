const jokeBtn = document.getElementById('jokeBtn');
const jokeEl = document.getElementById('jokeEl');
jokeBtn.addEventListener('click', getJoke);
// function getJoke() {
// 	const config = { headers: { Accept: 'application/json' } };
// 	const url = 'https://icanhazdadjoke.com/';
// 	const ok = '2';
// 	fetch(url, config)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			if (data.status.toString().charAt(0) === ok) {
// 				jokeEl.innerText = data.joke;
// 			} else {
// 			}
// 		});
// }

async function getJoke() {
	const config = { headers: { accept: 'application/json' } };
	const url = 'https://icanhazdadjoke.com/';
	const ok = '2';
	let res = await fetch(url, config);
	let data = await res.json();
	if (data.status.toString().charAt(0) === ok) {
		jokeEl.innerHTML = data.joke;
	} else {
	}
}
getJoke();
