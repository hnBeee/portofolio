const themeSwitch = document.getElementById('theme-switch');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        footer.classList.add('dark-theme');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        document.body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        footer.classList.remove('dark-theme');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
}

themeSwitch.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme', isDark);
    footer.classList.toggle('dark-theme', isDark);
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    applyTheme(isDark);
});

window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark';

    applyTheme(isDark);
});