
$(document).ready(function() {
    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#header-img").offset().top
        }, 1000);
        console.log("Home is clicked!");
    });

    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 1000);
        console.log("About is clicked!");
    });
    
    $("#exp").click(function() {
        $('html, body').animate({
            scrollTop: $("#exp-section").offset().top
        }, 1000);
        console.log("Experience is clicked!");
    });
    
    $("#edu").click(function() {
        $('html, body').animate({
            scrollTop: $("#edu-section").offset().top
        }, 1000);
        console.log("Education is clicked!");
    });

    $("#skills").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills-section").offset().top
        }, 1000);
        console.log("Skills is clicked!");
    });
    
    $("#interests").click(function() {
        $('html, body').animate({
            scrollTop: $("#interests-section").offset().top
        }, 1000);
        console.log("Interests is clicked!");
    });

    $("#year").text(new Date().getFullYear());
});