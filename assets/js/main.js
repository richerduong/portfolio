/* Show menu */
const navMenu = document.getElementById('nav-menu'), // Get element with ID 'nav-menu' and store in navMenu
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if(navToggle){  // Check if navToggle exists
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu') // Add show-menu class when clicked
    })
}

/* Hide menu */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu on mobile */
const navLink = document.querySelectorAll('.nav__link') // Selects all elements with class 'nav__link' and stores them in 'navLink'

// Define function names linkAction
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu') // This hides the navigation menu
}
navLink.forEach(n => n.addEventListener('click', linkAction)) // Loop over each element in navLink NodeList, then the linkAction will be called on click events

/* Shadow Header */
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)