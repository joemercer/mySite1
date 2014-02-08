var $tabSections;

$(function(){
	"use strict";
	console.log('hello world');
	var $window = $(window);

	// # Fix Nav

	var $nav = $('.nav-container');
	var fixNavTrigger = $nav.offset().top;
	$window.scroll(function(){
    if ($window.scrollTop() >= fixNavTrigger){
			if (!$nav.hasClass('fixed')) {
				$nav.addClass('fixed');
			}
    }
    else{
			if ($nav.hasClass('fixed')) {
				$nav.removeClass('fixed');
			}
    }
	});

	// # Tabs

	var $tabTargets = $('.tab-target');
	$tabSections = $('.tab-section');

	$tabTargets.click(function(e){
		e.preventDefault();

		var $activeSection = $tabSections.filter('.active');
		var $activeTarget = $tabTargets.filter('.active');
		var $target = $(e.target);
		var target = $target.data().tabTarget;

		if ($activeSection.data().tab === target) {
			return; // tab already active
		}

		var $section;
		$tabSections.each(function(i, section){
			$section = $(section);
			if ($section.data().tab === target) {
				// change indicator on tab
				$activeSection.removeClass('active');
				$section.addClass('active');
				// change indicator on tab target
				$($activeTarget).removeClass('active');
				$target.addClass('active');
			}
		});

	});

});
