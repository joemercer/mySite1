/*! mySite 2014-02-08 */
var $tabSections;

$(function() {
    "use strict";
    console.log("hello world");
    var $window = $(window), $nav = $(".nav-container"), fixNavTrigger = $nav.offset().top;
    $window.scroll(function() {
        $window.scrollTop() >= fixNavTrigger ? $nav.hasClass("fixed") || $nav.addClass("fixed") : $nav.hasClass("fixed") && $nav.removeClass("fixed");
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