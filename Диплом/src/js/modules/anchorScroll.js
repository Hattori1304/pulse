function anchorScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const secID = anchor.getAttribute('href').substr(1);
            document.querySelector('.hamburger').classList.remove('active');
            document.querySelector('.header__nav').classList.remove('active');
            document.getElementById(secID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}
export default anchorScroll;