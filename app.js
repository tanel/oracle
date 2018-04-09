$(function () {

	$("form").submit(function (e) {
		e.preventDefault();

		var choices = $('input[type="text"]'),
			r = Math.floor(Math.random() * choices.length),
			input = $(choices[r]),
			span = input.next();

		span.removeClass("hidden");
	});

});