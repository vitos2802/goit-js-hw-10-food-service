const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('.js-switch-input');

const handleDarkTheme = () => {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
};

const handleLightTheme = () => {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
};

if (localStorage.getItem('theme') === Theme.DARK) {
  inputRef.checked = true;
  handleDarkTheme();
}

inputRef.addEventListener('change', e => {
  if (inputRef.checked === false) handleLightTheme();
  if (inputRef.checked === true) handleDarkTheme();
});
