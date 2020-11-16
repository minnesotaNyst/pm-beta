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

$(document).ready(function () {
	$('.modal').modal();
});

var apiCounter = function () {
	$.getJSON(
		'https://api.countapi.xyz/hit/minnesotanyst.github.iopm-beta/visits',
		function (response) {
			var apiDisplay = document.createElement('p');
			apiDisplay.textContent =
				'Fun fact, this site has been visited ' + response.value + ' times!';
			apiDisplay.classList = 'center-align';
			$('#visits').append(apiDisplay);
		}
	);
};

displayDecision();
apiCounter();
$('#get_name').on('click', setName);
