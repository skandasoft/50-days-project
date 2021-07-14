let speed = document.getElementById('speed');
let currSpeed = 500;
let autoText = document.getElementById('auto-text');
let text = autoText.dataset.text;
let idx = 1;
speed.addEventListener('input', (e) => (currSpeed = 500 / e.target.value));

function showAutoText() {
	if (idx > text.length) {
		idx = 1;
	}
	autoText.innerHTML = ` ${text.slice(0, idx++)}
	<span id='cursor'>|</span>
	`;
	setTimeout(showAutoText, currSpeed);
}
let cursor = true;
setInterval(() => {
	if (cursor) {
		document.getElementById('cursor').style.opacity = 0;
	} else {
		document.getElementById('cursor').style.opacity = 1;
	}
	cursor = !cursor;
}, 150);

setTimeout(showAutoText, 1000);
