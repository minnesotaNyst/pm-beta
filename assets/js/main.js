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
		var dDisplay = document.createElement('h6');
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

var userQuestion = function () {
	var user = $('#full-name').val();
	var email = $('#email').val();
	var message = $('#contact-message').val();
	localStorage.setItem('#full-name', JSON.stringify(user));
	localStorage.setItem('#email', JSON.stringify(email));
	localStorage.setItem('#contact-message', JSON.stringify(message));
	$('#full-name').val('');
	$('#email').val('');
	$('#contact-message').val('');
};

/* Activates side nav in mobile screens */
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('#submit-btn').on('click', userQuestion);

displayDecision();
$('#get_name').on('click', setName);
