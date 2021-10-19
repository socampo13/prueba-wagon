$(document).ready(function(){

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '#main-banner'
    });
    setClassToggle('#main-banner', 'fade-in')
    addTo(controller);

});
