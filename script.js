const body = document.body;
const themeBtn = document.querySelector('.fas');
const getBodyTheme = localStorage.getItem('theme');
const getBtnTheme = localStorage.getItem('btn-theme');

const isLight = () => body.classList.contains('body-light');

const toggleDark = () => {
	body.classList.remove('body-light');
	body.classList.add('body-dark');
	localStorage.setItem('theme', 'body-dark');
	themeBtn.classList.remove('fa-sun');
	themeBtn.classList.add('fa-moon');
	localStorage.setItem('btn-theme', 'fa-moon');
};

const toggleLight = () => {
	body.classList.remove('body-dark');
	body.classList.add('body-light');
	localStorage.setItem('theme', 'body-light');
	themeBtn.classList.remove('fa-moon');
	themeBtn.classList.add('fa-sun');
	localStorage.setItem('btn-theme', 'fa-sun');
};

const toggleTheme = () => (isLight() ? toggleDark() : toggleLight());

themeBtn.addEventListener('click', toggleTheme);

const setBodyTheme = () => body.classList.add(getBodyTheme);
const setBtnTheme = () => themeBtn.classList.add(getBtnTheme);

setBodyTheme();
setBtnTheme();
