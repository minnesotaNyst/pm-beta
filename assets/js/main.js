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

/* get the name from the modal & set variables */

var fName = [];

/* get from local storage */
var displayName = function () {
	fName = JSON.parse(localStorage.getItem('firstName'));
	console.log(fName);

	if (!fName) {
		fName = [];
		return;
	} else {
		$('#visitor').text(fName);
	}
};

/* need to set the name in local storage */
var setName = function () {
	var firstName = $('#first_name').val();
	localStorage.setItem('firstName', JSON.stringify(firstName));

	displayName();
};

$('#get_name').on('click', setName);

displayModal();
