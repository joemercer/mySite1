var $tabSections;

$(function(){
	"use strict";
	console.log('hello world');
	var $window = $(window);

	// # Fix Nav

	var $content = $('#content');
	var $nav = $('.nav-container');
	var fixNavTrigger = $nav.offset().top;
	$window.scroll(function(){
    if ($window.scrollTop() >= fixNavTrigger){
			if (!$nav.hasClass('fixed')) {
				$content.css('margin-top', $nav.outerHeight(true));
				$nav.addClass('fixed');
			}
    }
    else{
			if ($nav.hasClass('fixed')) {
				$content.css('margin-top', 0);
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
		var target = $(e.target).data().tabTarget;

		if ($activeSection.data().tab === target) {
			return; // tab already active
		}

		var $section;
		$tabSections.each(function(i, section){
			$section = $(section);
			if ($section.data().tab === target) {
				$activeSection.removeClass('active');
				$section.addClass('active');
			}
		});

	});

});
