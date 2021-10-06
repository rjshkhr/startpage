const body = document.body;
const themeBtn = document.querySelector(".fas");
const getBodyTheme = localStorage.getItem("theme");
const getBtnTheme = localStorage.getItem("btn-theme");

const isLight = () => body.classList.contains("body-light");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  themeBtn.classList.add(btnClass);
};

addThemeClass(getBodyTheme, getBtnTheme);

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("theme"));
  themeBtn.classList.remove(localStorage.getItem("btn-theme"));
  addThemeClass(bodyClass, btnClass);
  localStorage.setItem("theme", bodyClass);
  localStorage.setItem("btn-theme", btnClass);
};

const toggleTheme = () =>
  isLight()
    ? setTheme("body-dark", "fa-sun")
    : setTheme("body-light", "fa-moon");

themeBtn.addEventListener("click", toggleTheme);
