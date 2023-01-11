/*============================================================
Navbar
==============================================================*/

/* Bg change on scroll */
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
});


/* Collapse nav on click */
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

/*============================================================
Smooth scroll
==============================================================*/

var scroll = new SmoothScroll('nav a[href*="#"]', {
    speed: 500
});

var scroll = new SmoothScroll('#scrollTop[href*="#"]', {
    speed: 500
});

/*============================================================
Scroll to top button
==============================================================*/

// When the user scrolls down 700px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

/*============================================================
Portfolio
==============================================================*/

/* Show and hide div (cards) */
$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value === "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    $('.filter-button').click(function (e) {
        e.preventDefault();
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });
});

/*============================================================
Fancybox
==============================================================*/

$('[data-fancybox="images"]').fancybox({
    buttons: [
      'slideShow',
      'zoom',
      'fullScreen',
      "thumbs",
      'close'
    ],
    thumbs: {
        autoStart: true
    }
});

/*============================================================
Counter
==============================================================*/

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/*============================================================
Wow
==============================================================*/

var wow = new WOW({
    offset: 75,          // distance to the element when triggering the animation (default is 0)
    mobile: false,       // trigger animations on mobile devices (default is true)
});
wow.init();