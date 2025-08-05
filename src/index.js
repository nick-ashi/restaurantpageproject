import './styles.css';

import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadAboutPage } from './about.js';

// home page content when the page first loads
document.addEventListener('DOMContentLoaded', function() {
    loadHomePage();

    const homeButton = document.querySelector('#home-button');
    homeButton.addEventListener('click', function() {
        loadHomePage();
    });

    // menu page content when the corresponding button is clicked
    const menuButton = document.querySelector('button[href="./menu.js"]');
    menuButton.addEventListener('click', function() {
        loadMenuPage();
    });

    const aboutButton = document.querySelector('#about-button');
    aboutButton.addEventListener('click', function() {
        loadAboutPage();
    });


    // THEME TOGGLE BABY
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    updateToggleIcon(currentTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });

    function updateToggleIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
});

console.log("wha");
