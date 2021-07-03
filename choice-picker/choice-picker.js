const textareaEl = document.getElementById('textArea');
const tagsEl = document.getElementById('tags');
textareaEl.addEventListener('keyup', (evt) => {
	createTags(evt.target.value);
	if (evt.key === 'Enter') {
		evt.target.value = '';
		setTimeout(() => {
			setIntervalX(chooseRandomTag, 300, 20);
		}, 200);
	}
});

function createTags(str) {
	const tags = str
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());
	// .map((choice) => `<span class="tag">${choice}</span>`)
	// .join('');
	// tagsEl.innerHTML = tags;
	tagsEl.innerHTML = '';
	tags.forEach((tag) => {
		let tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

textareaEl.addEventListener('blur', () => {
	textareaEl.value = '';
	intervalID = setIntervalX(chooseRandomTag, 300, 10);
});

let x = 0;
function setIntervalX(callback, delay, times) {
	let intervalID = setInterval(() => {
		callback(delay);
		if (++x >= times) {
			window.clearInterval(intervalID);
			x = 0;
			setTimeout(() => {
				callback();
			}, 300);
		}
	}, delay);
}
function chooseRandomTag(delay) {
	let randChoice = randomNumber(tags.childNodes.length);
	let randomTag = tagsEl.children[randChoice];
	randomTag.classList.add('highlight');
	if (delay) {
		setTimeout(() => {
			randomTag.classList.remove('highlight');
		}, delay);
	}
}

function randomNumber(max) {
	return Math.floor(Math.random() * max);
}
