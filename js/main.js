const nav = document.querySelector('.navigation')

document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    })

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamMenu.contains(e.target)) {
            mobileMenu.classList.remove('open')
        }
    })
})