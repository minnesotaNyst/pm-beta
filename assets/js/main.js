/* initialization provided by materialize for the date picker */
/* document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.datepicker');
	var instances = M.Datepicker.init(elems, options);
}); */
$(document).ready(function () {
	$('.datepicker').datepicker();
});
