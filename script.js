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
//Gallery filter
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300)
        }
    });
//End of gallery filter
//Active gallery item
    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item')
    })
//End of active gallery item
//Pricing animations
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 4300) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    })
//End of pricing animations

});






























