/*! mySite 2014-01-18 */
var $tabSections;

$(function() {
    "use strict";
    console.log("hello world");
    var $window = $(window), $content = $("#content"), $nav = $(".nav-container"), fixNavTrigger = $nav.offset().top;
    $window.scroll(function() {
        $window.scrollTop() >= fixNavTrigger ? $nav.hasClass("fixed") || ($content.css("margin-top", $nav.outerHeight(!0)), 
        $nav.addClass("fixed")) : $nav.hasClass("fixed") && ($content.css("margin-top", 0), 
        $nav.removeClass("fixed"));
    });
    var $tabTargets = $(".tab-target");
    $tabSections = $(".tab-section"), $tabTargets.click(function(e) {
        e.preventDefault();
        var $activeSection = $tabSections.filter(".active"), $activeTarget = $tabTargets.filter(".active"), $target = $(e.target), target = $target.data().tabTarget;
        if ($activeSection.data().tab !== target) {
            var $section;
            $tabSections.each(function(i, section) {
                $section = $(section), $section.data().tab === target && ($activeSection.removeClass("active"), 
                $section.addClass("active"), $($activeTarget).removeClass("active"), $target.addClass("active"));
            });
        }
    });
});