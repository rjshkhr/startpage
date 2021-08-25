const body = document.body;
const themeBtn = document.querySelector('.fas');
const getBodyTheme = localStorage.getItem('theme');
const getBtnTheme = localStorage.getItem('btn-theme');

const isLight = () => body.classList.contains('body-light');

const setTheme = (bodyClass, buttonClass) => {
	document.body.classList.remove(localStorage.getItem('theme'));
	themeBtn.classList.remove(localStorage.getItem('btn-theme'));
	document.body.classList.add(bodyClass);
	themeBtn.classList.add(buttonClass);
	localStorage.setItem('theme', bodyClass);
	localStorage.setItem('btn-theme', buttonClass);
};

const toggleTheme = () =>
	isLight()
		? setTheme('body-dark', 'fa-sun')
		: setTheme('body-light', 'fa-moon');

themeBtn.addEventListener('click', toggleTheme);

const setBodyTheme = () => body.classList.add(getBodyTheme);
const setBtnTheme = () => themeBtn.classList.add(getBtnTheme);

setBodyTheme();
setBtnTheme();
