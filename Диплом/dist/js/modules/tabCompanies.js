function tabs() {
    const tabs = document.querySelectorAll('.tab'),
          tabContents = document.querySelectorAll('.companies__wrapper');
    function giveFirstActive(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
            arr[0].classList.add('active');
        }
    }
    giveFirstActive(tabs);
    giveFirstActive(tabContents);
    function activeClassRemove(element) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove('active');
        }
    }
    function idActiveGiver(id) {
        document.getElementById(id).classList.add('active');
    }
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(){
            activeClassRemove(tabs);
            tab.classList.add('active');
            activeClassRemove(tabContents);
            const tabId = tab.getAttribute('data-tab');
            idActiveGiver(tabId);
        });
    });
}
export default tabAbout;