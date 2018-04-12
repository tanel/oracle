$(function () {
	var result = $('.result'),
		entry = $('.entry'),
		calculation = $('.calculation'),
		progressBar = calculation.find('.progressbar').progressbar({maximum: 20, step: 1}),
		percent = 0;

	progressBar.on('positionChanged', function (e) {
		percent = e.percent;
	});

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

	var stepIt = function () {
		progressBar.progressbar('stepIt');

		if (percent >= 100) {
			window.setTimeout(calculationDone, 1000);
			return;
		}

		var r = Math.floor(Math.random() * 1000) + 300;
		window.setTimeout(stepIt, r);
	};

	var startCalculation = function (e) {
		e.preventDefault();

		entry.addClass('invisible');

		calculation.removeClass('invisible');

		stepIt();
	};

	var calculationDone = function () {
		result.find('blockquote').text(calculateChoice());
		
		result.removeClass('invisible');

		calculation.addClass('invisible');

		progressBar.progressbar('setPosition', 0);
	};

	var restartEntry = function (e) {
		e.preventDefault();

		entry.removeClass('invisible');

		result.addClass('invisible');
	};

	entry.find("form").submit(startCalculation);
	result.find("form").submit(restartEntry);
});