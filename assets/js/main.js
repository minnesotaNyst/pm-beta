/* load the form.io when the page loads */
window.onload = function () {
	Formio.createForm(
		document.getElementById('formio'),
		'https://atelyxbavvhqhre.form.io/pmbeta'
	);
};

/* load the modal when the page loads */
$(document).ready(function () {
	$('.modal').modal();
	$('#modal1').modal('open');
	$('.modal-close').click(function () {
		$('#modal1').modal('close');
	});
});

/* initialization provided by materialize for the date picker */
$(document).ready(function () {
	$('.datepicker').datepicker();
});
