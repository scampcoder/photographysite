//Hamburger toggle
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change')
    });
//End of hamburger toggle
//Navbar scroll styles
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200){
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
//End of navbar scroll styles
//Mission animation
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 650){
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    })
//End of mission animation
});






























