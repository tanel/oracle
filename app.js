$(function () {
	var result = $('.result'),
		entry = $('.entry');

	var collectChoices = function () {
		var inputs = entry.find('input[type="text"]'),
			input,
			i,
			text,
			choices = [];

		for (i = 0; i < inputs.length; i++) {
			input = $(inputs[i]);
			text = input.val();
			if (text !== '') {
				choices.push(text);
			}
		}

		return choices;
	};

	var calculateChoice = function () {
		var choices = collectChoices(),
			r = Math.floor(Math.random() * choices.length);

		return choices[r];
	};

	var choose = function (e) {
		e.preventDefault();

		result.find('h1').text(calculateChoice());
		entry.addClass('invisible');
		result.removeClass('invisible');
	};

	var startEntry = function (e) {
		e.preventDefault();

		entry.removeClass('invisible');
		result.addClass('invisible');
	};

	entry.find("form").submit(choose);
	result.find("form").submit(startEntry);
});