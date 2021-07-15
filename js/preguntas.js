const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');

preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activo');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;

		if (!respuesta.style.maxHeight) {
			// Si esta vacio el maxHeigth ejecutamos lo siguiente
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// Reiniciar las preguntas (OPCIONAL)

		preguntas.forEach((elemento) => {
			//  Ejecutamos este codigo solo en las preguntas que no sean a la que le dimos click
			if (pregunta !== elemento) {
				elemento.classList.remove('activo');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});
	});
});
