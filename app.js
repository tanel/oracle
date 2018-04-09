$(function () {
	$("form").submit(function (e) {
		e.preventDefault();
		var choices = $('input[type="text"]');
		var r = Math.floor(Math.random() * choices.length);
		var input = $(choices[r]);
		var span = input.next();
		span.removeClass("hidden");
		console.log(input);
		console.log(r);
	});
});