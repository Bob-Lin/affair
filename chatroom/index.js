$(document).ready(function(){
	setInterval(function(){
	$.ajax({
		method: "POST",
		url: "do.php"
		}).done(function(data){
			$("#content").html(data);
					})
				}, 1000);
    
    $('#delete').click(function(){
	$.ajax({
		method: "POST",
		url: "delete.php",
		data: {text: $('input').val()}
		}).done(function(data){
	$("#content").html(data);
	$('input').val("");
					});
				});
        
        
	$('#submit').click(function(){
	$.ajax({
		method: "POST",
		url: "do.php",
		data: {text: $('input').val()}
		}).done(function(data){
	$("#content").html(data);
	$('input').val("");
					});
				});
$(document).keydown(function(e){
	if(e.keyCode == 13) {
	$.ajax({
		method: "POST",
		url: "do.php",
		data: {text: $('input').val()}
	}).done(function(data){
	$("#content").html(data);
	$('input').val("");
				});
				}
				});
				});
