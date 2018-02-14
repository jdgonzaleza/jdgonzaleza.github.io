/* global $*/


"use strict";

/*Este codigo ayuda a que el navbar se oculte cuando se selecciona una opcion. ESTO SOLO FUNCIONA EN LOS CELULARES...*/
$('.navbar-nav>li>a').on('click', function () {
	$('.navbar-collapse').collapse('hide');
});

/*Este codigo me ayuda a resaltar en el nav bar la seccion en la cual esta parado el usuario.*/
$(".nav-link").on("click", function () {
	$(".nav-link").removeClass("active");
	$(this).addClass("active");
});


/*Esta funcion me ayuda a coger informacion de un json y plasmarla en un modal para cada proyecto.
Me ahorro un monton de codigo HTML*/
var loadJSON = function (name) {
	$.getJSON("./json/" + name + ".json", function (data) {
		$('#modal-title').text(data.title);
		$('#modal-description').text(data.description);
		$('#modal-technologies').text(data.technologies);
		$('#modal-img').attr('src', data.img);
		$('#modal-position').text(data.position);
		$('#modal-date').text(data.dates);
		$("#modal-link").attr('href', data.link);
	});
};

(function () {
	$(document).ready(function () {
		return $('#contact-form').submit(function (e) {

			var name = document.getElementById('inputName'),
				email = document.getElementById('inputEmail'),
				message = getElementById('inputMessage');
			if (!name.value || !email.value || !message.value) {
				alertify.error('Please check your entries');
				return false;
			} else {
				$.ajax({
					method: 'POST',
					url: '//formspree.io/juandg161@gmail.com',
					data: $('#contact-form').serialize(),
					datatype: 'json'
				});
				e.preventDefault();
				$(this).get(0).reset();
			}
		});
	});

}).call(this);