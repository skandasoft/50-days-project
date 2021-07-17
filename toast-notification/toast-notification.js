let btn = document.getElementById('show');
let toasts = document.getElementById('toasts');
const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const types = ['info', 'success', 'error'];
let idx = 0;
btn.addEventListener('click', () => showMessage('This is invalid Data'));
function showMessage(message = null, type = null) {
	let toast = document.createElement('div');
	toast.classList.add('toast');
	toast.classList.add(getRandomType());
	toast.innerHTML = message ? message : getRandomMessage();
	toasts.appendChild(toast);
	if (idx === messages.length) idx = 0;
	setTimeout(function () {
		toast.remove();
	}, 5000);
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}
