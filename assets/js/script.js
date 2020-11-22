var menuResponsive = {
    init: function() {
        this.toggleMenu()
    },
    toggleMenu: function() {
        var button = document.querySelector('.menu-bar');
        var menu = document.querySelector('.list-menu');
        button.addEventListener('click', function() {
            menu.classList.toggle('show');
        })
    }

}
menuResponsive.init()