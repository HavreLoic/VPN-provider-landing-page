"use strict";
const body = document.querySelector('body');
const navButtons = document.querySelector('.nav-buttons');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const navIcon = document.querySelector('.nav-icon');
const toggleOff = document.querySelector('.toggle-nav-off');
const activeNavTop = document.querySelector('.nav-icon-top');
const activeNavMiddle = document.querySelector('.nav-icon-middle');
const activeNavBottom = document.querySelector('.nav-icon-bottom');
function openHumbuggerNav() {
    body.addEventListener('click', (e) => {
        let target = e.target;
        if (window.screen.width <= 830 && target.className === 'nav-icon' || target.className === 'nav-icon-top' || target.className === 'nav-icon-middle' || target.className === 'nav-icon-bottom') {
            navLinks.classList.toggle('toggle-nav-on');
            navLinks.classList.toggle('toggle-nav-off');
            body.classList.toggle('fixed-position');
            activeNavTop.classList.toggle('active-top');
            activeNavBottom.classList.toggle('un-active-top');
            activeNavMiddle.classList.toggle('active-middle');
            activeNavTop.classList.toggle('un-active-bottom');
            activeNavBottom.classList.toggle('active-bottom');
        }
        else if (target.className.includes('un-active-top') || target.className.includes('un-active-bottom')) {
            navLinks.classList.toggle('toggle-nav-on');
            navLinks.classList.toggle('toggle-nav-off');
            body.classList.toggle('fixed-position');
            activeNavMiddle.classList.toggle('active-middle');
            activeNavTop.classList.toggle('un-active-bottom');
            activeNavTop.classList.toggle('active-top');
            activeNavBottom.classList.toggle('un-active-top');
            activeNavBottom.classList.toggle('active-bottom');
        }
    });
}
openHumbuggerNav();
function screenViewOnDesktop() {
    if (window.screen.width >= 830) {
        navIcon.style.display = "none";
        activeNavTop.style.display = "none";
        activeNavMiddle.style.display = "none";
        activeNavBottom.style.display = "none";
        body.style.position = "static";
        navLinks.classList.remove('toggle-nav-off');
    }
}
screenViewOnDesktop();
let width = $(window).width();
$(window).resize(function () {
    if (width > 830 && $(window).width() < 830) {
        location.reload();
    }
    else if (width < 830 && $(window).width() > 830) {
        location.reload();
    }
});
