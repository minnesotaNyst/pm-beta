/* set variables */
var fName = [];

/* load the form.io when the page loads */
window.onload = function () {
	Formio.createForm(
		document.getElementById('formio'),
		'https://atelyxbavvhqhre.form.io/pmbeta'
	);
};

/* load the modal when the page loads */
var displayModal = function () {
	$(document).ready(function () {
		$('.modal').modal();
		$('#modal1').modal('open');
		$('.modal-close').click(function () {
			$('#modal1').modal('close');
		});
	});
};
/* initialization provided by materialize for the date picker */
$(document).ready(function () {
	$('.datepicker').datepicker();
});

/* get from local storage and dynamically display message */
var displayName = function () {
	fName = JSON.parse(localStorage.getItem('firstName'));
	console.log(fName);

	if (!fName) {
		fName = [];
		return;
	} else {
		var dDisplay = document.createElement('p');
		dDisplay.textContent = 'Thank you for visiting our page, ' + fName + '!';
		dDisplay.classList = 'grey-text text-lighten-4';
		$('#visitor').append(dDisplay);
	}
};

/* need to set the name in local storage */
var setName = function () {
	var firstName = $('#first_name').val();
	localStorage.setItem('firstName', JSON.stringify(firstName));

	displayName();
};

/* function to see if a fName already exists, if not then (and only then) run the displayModal function */
var displayDecision = function () {
	fName = JSON.parse(localStorage.getItem('firstName'));

	if (!fName) {
		displayModal();
	} else {
		displayName();
		return;
	}
};

/* opens modal on contact-us page upon form submission */
$(document).ready(function () {
	$('#modal2').modal();
});

/* Contains values for user form */
var userQuestion = function () {
	var user = $('#full-name').val();
	var email = $('#email').val();
	var message = $('#contact-message').val();
	if (user !== '') {
		//this var is looking for information that might exist with a key of inputInfo, if nothing exists set inputInfo = []
		var inputInfo = JSON.parse(window.localStorage.getItem('inputInfo')) || [];
		var content = {
			full_name: user,
			user_email: email,
			content_message: message
		};
		inputInfo.push(content);
		window.localStorage.setItem('inputInfo', JSON.stringify(inputInfo));
	}
	$('#full-name').val('');
	$('#email').val('');
	$('#contact-message').val('');
};

/* Activates side nav in mobile screens */
$(document).ready(function () {
	$('.sidenav').sidenav();
});

/* feature discovery button on contact-us page */
$(document).ready(function () {
	$('.tap-target').tapTarget();
});

var apiCounter = function () {
	$.getJSON(
		'https://api.countapi.xyz/hit/minnesotanyst.github.iopm-beta/visits',
		function (response) {
			var apiDisplay = document.createElement('p');
			apiDisplay.textContent =
				'(Fun fact, this site has been visited ' + response.value + ' times!)';
			apiDisplay.classList = 'left-align';
			$('#visits').append(apiDisplay);
		}
	);
};

$('#submit-btn').on('click', userQuestion);
$('.modal').modal();

displayDecision();
apiCounter();
$('#get_name').on('click', setName);
