const faqBtns = document.querySelectorAll('.faq-toggle');

faqBtns.forEach((faqBtn) => {
	faqBtn.addEventListener('click', () => {
		faqBtns.forEach((faqEachBtn) => {
			if (faqEachBtn !== faqBtn) {
				faqEachBtn.parentElement.classList.remove('open');
			}
		});
		faqBtn.parentElement.classList.toggle('open');
	});
});
