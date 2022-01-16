function menu() {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.nav'),
          logo = document.querySelector('.header__logo');
    hamburger.addEventListener('click',()=>{
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        if (hamburger.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            logo.classList.add('active');
        } else {
            document.body.style.overflow = 'auto';
            logo.classList.remove('active');
        }
    });
}
export default menu;