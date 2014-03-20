$(document).ready(function (){
	var html = $('.formItem.clone').clone();
	var add ='<form class="formItem"><input type="button" class="btn_add"/><input type="text" name=""/><input type="text" name=""/><input type="text" name=""/><input type="button" class="btn_close"/></form>';
	$('.addItem').on('click', function(){
		$('.item').append(add);
	});
	$('.item').on('click', '.formItem .btn_close', function(){
		$(this).parent().remove();
	});
	var add1 = '<form class="formproject"><input type="button"  class="cross btn_close"/><input type="button" class="minus"/><input type="button"  class="plus"/><input type="text" class="project"/><input type="text" class="reduction"/><input type="text" class="weather"/><input type="text" class="skin"/><input type="button"  class="order"/><img scr="" class="image" /></form>';
	$('.btn_projectitem').on('click', function(){
		$('.form').append(add1);
	});
});