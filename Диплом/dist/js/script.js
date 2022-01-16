import anchorScroll from "./modules/anchorScroll";
import menu         from "./modules/nav";
import slider       from "./modules/slider";
import tabs         from "./modules/tabs";
window.addEventListener('DOMContentLoaded', function() {
    anchorScroll();
    menu();
    slider();
    tabs({
        tab: '.about__title',
        tabsContent: '.about__item'
    });
    tabs({
        tab: '.tab',
        tabsContent: '.companies__wrapper'
    });
});