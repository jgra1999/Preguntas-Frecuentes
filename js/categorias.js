const categorias = document.querySelectorAll('#categorias .categoria');

const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');

let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		// Target: devuelve solo el elemento al que se le hace click (probar con console.log(e.Target))
		// currentTarget: devuelve a todos los elementos en bloque (probar console.log(e.currentTarget))

		e.currentTarget.classList.toggle('activa');

		categoriaActiva = categoria.dataset.categoria;

		// Activacion del contenedor de preguntas correspondiente a la categoria
		contenedorPreguntas.forEach((contenedor) => {
			if (contenedor.dataset.categoria === categoriaActiva) {
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});
