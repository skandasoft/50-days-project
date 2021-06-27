let keys = document.querySelectorAll('.key');
let insert = document.getElementById('insert');
document.addEventListener('keypress', (event) => {
	insert.innerHTML = `
	<div class="key">
	${event.key === ' ' ? 'Space' : event.key}
	<small>event.key</small>
	</div>
	<div class="key">
	${event.keyCode}
	<small>event.keyCode</small>
	</div>
	<div class="key">
	${event.code}
	<small>event.code</small>
	</div>
	`;

	console.log(event.keyCode, event.key, event.code);
});
