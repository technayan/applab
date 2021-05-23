
// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        750:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

// WOW JS

new WOW().init();

// JQuery
$(document).ready(function(){

    // Price Tab
    $('.month-btn').click(function(){
        $(this).addClass('active');
        $('.annual-btn').removeClass('active');
        $('.monthly-pricing-row').removeClass('d-none');
        $('.annual-pricing-row').addClass('d-none');
    });

    $('.annual-btn').click(function(){
        $(this).addClass('active');
        $('.month-btn').removeClass('active');
        $('.annual-pricing-row').removeClass('d-none');
        $('.monthly-pricing-row').addClass('d-none');
    });

    // Sticky Navbar

    $('.hero-area-wrapper').waypoint(function(direction){
        if (direction == 'down'){
            $('.navbar').addClass('shadow');
            $('.navbar').css('background','#fff');
        }
        else {
            $('.navbar').removeClass('shadow');
            $('.navbar').css('background','transparent');
        }
    });

    $('.nav-link').click(function(){
        $('.navbar-nav .active').removeClass('active');
        $(this).addClass('active');
        $('.navbar .show').removeClass('show');
        $('.navbar-toggler').removeClass('open');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-toggler').attr('aria-expanded','false');
    });

   

    // Bottom To Top Button

    $('.trusted-companies').waypoint(function(direction){
        if (direction == 'down'){
            $('.bottom-to-top').css('bottom','1rem');
        }
        else {
            $('.bottom-to-top').css('bottom','-4rem');
        }
    });
});

