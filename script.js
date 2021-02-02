let body = document.body;
let theme = localStorage.getItem('theme');
let btnTheme = localStorage.getItem('btn-theme');
let btn = document.querySelector('.btn-theme');
let btnIcon = document.querySelector('.fas');

btn.addEventListener('click', () => {
	if (body.classList.contains('body-light')) {
		body.classList.remove('body-light');
		btnIcon.classList.remove('fa-sun');
		localStorage.setItem('theme', 'body-dark');
		localStorage.setItem('btn-theme', 'fa-moon');
	} else {
		body.classList.add('body-light');
		btnIcon.classList.add('fa-sun');
		localStorage.setItem('theme', 'body-light');
		localStorage.setItem('btn-theme', 'fa-sun');
	}
});

const getTheme = () => {
	body.classList.add(theme);
	btnIcon.classList.add(btnTheme);
};
getTheme();
