/* load the form.io when the page loads */
window.onload = function () {
	Formio.createForm(
		document.getElementById('formio'),
		'https://atelyxbavvhqhre.form.io/pmbeta'
	);
};

/* load the modal when the page loads */
/* document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, options);
}); */

// Or with jQuery

$(document).ready(function () {
	$('.modal').modal();
	console.log('ready');
});

/* initialization provided by materialize for the date picker */
$(document).ready(function () {
	$('.datepicker').datepicker();
});
