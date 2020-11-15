/* initialization provided by materialize for the date picker */
$(document).ready(function () {
	$('.datepicker').datepicker();
});

/* load the form.io when the page loads */
window.onload = function () {
	Formio.createForm(
		document.getElementById('formio'),
		'https://atelyxbavvhqhre.form.io/pmbeta'
	);
};
