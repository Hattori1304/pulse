import {Swiper, Pagination, Keyboard, Navigation, EffectFade, Autoplay} from 'swiper';
Swiper.use([Pagination, Keyboard, Navigation, EffectFade, Autoplay]);
function slider() {
    let swiper1 = new Swiper('.first-slider', {
        loop: true,
        slidesPerView: 1,
        speed: 1300,
        autoplay: true,
        keyboard: true,
        simulateTouch: false,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
        },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });
}
export default slider;