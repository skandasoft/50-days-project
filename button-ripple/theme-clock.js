const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const mode = document.querySelector('.btn');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let hour, ampm, min;

mode.addEventListener('click', (e) => {
	document.documentElement.classList.toggle('dark');
	e.currentTarget.innerText = e.currentTarget.innerText === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
});

function getCurrentTime(firstTime) {
	let dateObj = new Date();
	let sec = dateObj.getSeconds();
	secEl.style.transform = `translateX(-50%) rotate(${sec * 6}deg)`;
	if (sec === 0 || firstTime) {
		min = dateObj.getMinutes();
		if (min < 10) {
			min = '0' + min;
		}
		minEl.style.transform = `translateX(-50%) rotate(${min * 6}deg)`;
		if (min === 0 || firstTime) {
			hour = dateObj.getHours();
			ampm = 'AM';
			if (hour > 12) {
				hour = hour - 12;
				ampm = 'PM';
			}
			hourEl.style.transform = `translateX(-50%) rotate(${hour * 30 + Math.round(min / 60) * 6}deg)`;
		}
		updateDateTime(hour, ampm, min);
		setInterval(getCurrentTime, 1000);
	}
}
function updateDateTime(hour, ampm, min) {
	let dateObj = new Date();
	let date = dateObj.getDate();
	let day = days[dateObj.getDay()];
	// let month = dateObj.getMonth();
	let month = dateObj.toDateString().substr(4, 3);
	month[0].toUpperCase();
	timeEl.innerText = `${hour}:${min} ${ampm}`;
	dateEl.innerHTML = `
			${day}, ${month} <span>${date}</span>
	`;
}

getCurrentTime(true);
