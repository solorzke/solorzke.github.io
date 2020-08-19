$(document).ready(function() {
	console.log("Document is loaded & displayed on the user's page");
	changeMessage();

	$('#home').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#header-img').offset().top
			},
			1000
		);
		console.log('Scrolling to Home...');
	});

	$('#about').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#about-section').offset().top
			},
			1000
		);
		console.log('Scrolling to About...');
	});

	$('#exp').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#exp-section').offset().top
			},
			1000
		);
		console.log('Scrolling to Experience...');
	});

	$('#edu').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#edu-section').offset().top
			},
			1000
		);
		console.log('Scrolling to Education...');
	});

	$('#skills').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#skills-section').offset().top
			},
			1000
		);
		console.log('Scrolling to Skills...');
	});

	$('#interests').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#interests-section').offset().top
			},
			1000
		);
		console.log('Scrolling to Interests...');
	});

	$('#year').text(new Date().getFullYear());
});

function number_val() {
	var input_area = $('#number').val().length;
	if (input_area == 3) {
		var area_code = $('#number').val();
		$('#number').val('(' + area_code + ') ');
	} else if (input_area > 3) {
		var pieces = $('#number').val().split(' ');
		if (pieces.length > 1) {
			var phone_num = pieces[1];
			if (phone_num.length == 3) {
				var number = $('#number').val();
				$('#number').val(number + '-');
			}
		}
	}
}

function changeMessage() {
	const messages = [
		'<h1>Hello User...</h1>',
		'console.log("Hello World");',
		'echo("Hello Server");',
		'Log.d("main", "Hello User");',
		'print("Hello Visitor")'
	];
	window.setInterval(function() {
		let codeElement = document.querySelector('code');
		const random = Math.floor(Math.random() * messages.length);
		codeElement.innerText = messages[random];
	}, 2000);
}
