const jar = document.getElementById('jar');
const jugs = Array.from(document.querySelectorAll('.jug'));
const title = document.getElementById('remained');
const percent = document.getElementById('percentage');
const liters = document.getElementById('liters');
jugs.forEach((jug, idx) => {
	jug.addEventListener('click', (evt) => addWater(evt, idx));
});

function addWater(evt, idx) {
	const jug = evt.currentTarget;
	const nextFilled = jug.nextElementSibling?.classList.contains('water');
	if (nextFilled) {
		const nextSiblings = jugs.slice(idx + 1);
		nextSiblings.forEach((jug) => jug.classList.remove('water'));
	}
	const prevSiblings = jugs.slice(0, idx);
	prevSiblings.forEach((jug) => jug.classList.add('water'));

	jug.classList.toggle('water');
	if (jug.classList.contains('water')) idx++;
	addWaterToJar(idx);
}

function addWaterToJar(qty) {
	let waterRatio = (qty * 250) / 2000;
	let waterHeight = 274 * waterRatio + 'px';
	if ((waterRatio >= 0.5) & (waterRatio <= 0.8)) {
		title.style.top = 100 - waterRatio * 100 - 15 + '%';
	} else {
		title.style.top = '50%';
	}
	percent.innerText = waterRatio * 100 + '%';
	jar.style.setProperty('--height', waterHeight);
	liters.innerText = 2 - (qty * 250) / 1000 + 'L';
}
