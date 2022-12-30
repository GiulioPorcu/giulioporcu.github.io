var availableThemes = ['light', 'dark'];

function setTheme(theme) {
    if (availableThemes.includes(theme)) {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }
    else {
        setTheme(availableThemes[0]);
    }
}

function getTheme() {
    var theme = localStorage.getItem('theme');

    if (theme) {
        setTheme(theme);
    }
}

getTheme();