/*** Scroll Transitons ***/
if ($(window).width() < 768) {
    $('.navbar').toggleClass('scroll-transition', $(this).scrollTop() >= -1);
    $('.navbar-brand').toggleClass('scroll-transition-brand', $(this).scrollTop() >= -1);
    $('.active-link').toggleClass('scroll-transition-border', $(this).scrollTop() >= -1);
}
else {
    $(window).scroll(function () {
        $('.navbar').toggleClass('scroll-transition', $(this).scrollTop() > 200);
        $('.navbar-brand').toggleClass('scroll-transition-brand', $(this).scrollTop() > 200);
        $('.active-link').toggleClass('scroll-transition-border', $(this).scrollTop() > 200);
    });
}

function expand_get_started(){
    $('#expand').click();
}

$(document).ready(function () {
    $(window).scroll(function () {
        var Scroll = $(window).scrollTop() + 1,
            SectionOneOffset = 0, 
            SectionTwoOffset = $('#projects').offset().top;
            SectionThreeOffset = $('#get-started').offset().top;
        if (Scroll >= SectionOneOffset) {
            $("#home_link").addClass("active-link");
        } else {
            $("#home_link").removeClass("active-link");
        }
        if (Scroll >= SectionTwoOffset) {
            $("#project_link").addClass("scroll-transition-border");
            $("#home_link").removeClass("active-link");
            $("#home_link").removeClass("scroll-transition-border");
            $("#contact_link").removeClass("scroll-transition-border");
        } else {
            $("#project_link").removeClass("scroll-transition-border");
        }
        if (Scroll >= SectionThreeOffset) {
            $("#contact_link").addClass("scroll-transition-border");
            $("#project_link").removeClass("scroll-transition-border");
            $("#home_link").removeClass("active-link");
            $("#home_link").removeClass("scroll-transition-border");
        } else {
            $("#contact_link").removeClass("scroll-transition-border");
        }
    });
});