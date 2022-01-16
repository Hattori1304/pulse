function tabs() {
    const tabs = document.querySelectorAll('.tab_name');
    function removeActiveClass(tabs) {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].parentNode.parentNode.classList.remove('active');
        }
    }
    tabs.forEach(function(tab){
        tab.addEventListener('click', function(e) {
            removeActiveClass(tabs);
            tab.parentNode.parentNode.classList.add('active');
        });
    });
}
export default tabs;