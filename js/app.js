$(function() {
let header =$('#header');
let manageContainer = $("#manageContainer");
let manageContainerH = manageContainer.innerHeight();
let navToggle = $("#navToggle");
let nav = $("#header_block2");

$(window).on("scroll resize", function() {
    manageContainerH = manageContainer.innerHeight();
    scrollPos = $(this).scrollTop();
    
    checkScroll(scrollPos,manageContainerH);
});

function checkScroll(scrollPos, manageContainerH) {
    if( scrollPos > manageContainerH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}

navToggle.on("click", function(event) {
        
    event.preventDefault();
    nav.toggleClass("show");
});

/* Smooth scroll */ 
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
         scrollTop: elementOffset - 70
    }, 700);

    });

});
