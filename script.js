//Hamburger toggle
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change')
    });
//End of hamburger toggle
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200){
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
});































