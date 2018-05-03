$(document).ready(function(){

	jQuery(document).ready(function(){
         jQuery('#slippry-demo').slippry();
    });
	
	$('#spring-desc').hide();
	$('#plat-desc').hide();
	$('#spring').hide();
	$('#platform').hide();
	
	$('#foam-btn').click(function(){
		$('#foam').fadeIn();
		$('#foam-desc').fadeIn();
		$('#spring').hide();
		$('#spring-desc').hide();
		$('#platform').hide();
		$('#plat-desc').hide();
	});
	
	$('#spring-btn').click(function(){
		$('#foam').hide();
		$('#foam-desc').hide();
		$('#spring').fadeIn();
		$('#spring-desc').fadeIn();
		$('#platform').hide();
		$('#plat-desc').hide();
	});
	
	$('#platform-btn').click(function(){
		$('#foam').hide();
		$('#foam-desc').hide();
		$('#spring').hide();
		$('#spring-desc').hide();
		$('#platform').fadeIn();
		$('#plat-desc').fadeIn();
	});

	
});

var timedShowPage;
var activePage;

function loadPage() {
    timedShowPage = setTimeout(showPage, 1000);
    activePage = setTimeout(block, 1900);
}

function block(){
  document.getElementById("preload").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

function showPage() {
  document.getElementById("preload").style.opacity = 0;
  document.getElementById("mainContent").style.opacity = 1;
  document.getElementById("preload").style.zIndex = 0;

}

var $animation_elements = $('.animation-element');
	var $window = $(window);
	
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
  		var window_height = $window.height();
  		var window_top_position = $window.scrollTop();
  		var window_bottom_position = (window_top_position + window_height);
 
  		$.each($animation_elements, function() {
    		var $element = $(this);
    		var element_height = $element.outerHeight();
    		var element_top_position = $element.offset().top;
    		var element_bottom_position = (element_top_position + element_height);
 
    	//check to see if this current container is within viewport
    		if ((element_bottom_position >= window_top_position) &&
        	(element_top_position <= window_bottom_position)) {
      			$element.addClass('in-view');
    		} else {
      			$element.removeClass('in-view');
    		}
  		});
	}