/* Show menu */
const navMenu = document.getElementById('nav-menu'), // Get element with ID 'nav-menu' and store in navMenu
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if(navToggle){  // Check if navToggle exists
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('open-menu') // Add open-menu class when clicked
    })
}

/* Hide menu */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('open-menu')
    })
}

/* Remove menu on mobile */
const navLink = document.querySelectorAll('.nav__link') // Selects all elements with class 'nav__link' and stores them in 'navLink'

// Define function names linkAction
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('open-menu') // This hides the navigation menu
}
navLink.forEach(n => n.addEventListener('click', linkAction)) // Loop over each element in navLink NodeList, then the linkAction will be called on click events

/* Show Scroll Up Button */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Dark Light Theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
