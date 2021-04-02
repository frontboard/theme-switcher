const button = document.querySelector('#theme-switcher');
const body = document.querySelector('body');

const config = {
  className: 'darkmode',
  cookieName: 'darkmode'
};

const toggleTheme = () => {
  body.classList.toggle(config.className);

  if (body.classList.contains(config.className)) {
    localStorage.setItem(config.cookieName, 'true');
  } else {
    localStorage.removeItem(config.cookieName);
  }
};

const loadDarkTheme = () => {
  if (localStorage.getItem(config.cookieName)) {
    body.classList.add(config.className);
  }
};

button.addEventListener('click', toggleTheme);
window.addEventListener('load', loadDarkTheme);