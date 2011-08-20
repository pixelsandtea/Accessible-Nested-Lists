$(document).ready(function(){
	$('.nav ul li a').css({position: 'static'});
	$('.nav li:has(ul) > a').addClass('menuParent');
	$('.nav li ul li a').focus(function(){
		$(this).parents('.parent').addClass('navFirstChild');
	});
	$('.nav ul ul li a').focus(function(){
		$(this).parents('.children').addClass('navNextChild');
	});
	$('.nav li ul li a').blur(function(){
		$(this).parents('.parent').removeClass('navFirstChild');
	});
	$('.nav ul ul li a').blur(function(){
		$(this).parents('.children').removeClass('navNextChild');
	});
});