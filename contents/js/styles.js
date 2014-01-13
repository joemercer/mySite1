
$(function(){
	"use strict";
	console.log('hello world');
	var $window = $(window);


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

});
