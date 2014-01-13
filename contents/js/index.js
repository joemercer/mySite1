/*! mySite 2014-01-13 */
$(function() {
    "use strict";
    console.log("hello world");
    var $window = $(window), $content = $("#content"), $nav = $(".nav-container"), fixNavTrigger = $nav.offset().top;
    $window.scroll(function() {
        $window.scrollTop() >= fixNavTrigger ? $nav.hasClass("fixed") || ($content.css("margin-top", $nav.outerHeight(!0)), 
        $nav.addClass("fixed")) : $nav.hasClass("fixed") && ($content.css("margin-top", 0), 
        $nav.removeClass("fixed"));
    });
});