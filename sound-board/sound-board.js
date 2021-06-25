const buttons = document.querySelectorAll('.buttons');
const container = document.querySelector('.container');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;
	container.appendChild(btn);
	btn.addEventListener('click', () => {
		stopPlay();
		document.getElementById(sound).play();
	});
});

function stopPlay() {
	const audios = Array.from(document.getElementsByTagName('audio'));
	audios.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
	});
}
