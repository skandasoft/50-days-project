const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const profile_name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500);

function getData() {
	header.innerHTML = `
  <img src="https://picsum.photos/350/300?random" alt="" />`;
	title.innerHTML = `Lorem ipsum dolor sit amet.`;
	excerpt.innerHTML = `	Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam iusto quisquam officia,`;
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" class="profile-img" />`;
	profile_name.innerHTML = `John Doe`;
	date.innerHTML = `Oct 08,2021`;
	animated_bg_texts.forEach((bgText) => bgText.classList.remove('animated-bg-text'));
	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
}
