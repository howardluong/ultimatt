$(document).ready(function(){
	
	"use strict";
	
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