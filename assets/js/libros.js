document.addEventListener('DOMContentLoaded', function () {
  // URL del archivo JSON
  const url = '../../assets/JSON/libros.json';

  // Obtener referencia al carrusel y su contenedor
  const carouselInner = document.getElementById('carouselExampleIndicators');

  // Función para cambiar las imágenes del carrusel según el género seleccionado
  function cambiarImagenes(genero) {
    const carouselItems = document.querySelectorAll('.carousel-item');
    genero.forEach((libro, index) => {
        const carouselItem = carouselItems[index];
        const imagen = carouselItem.querySelector('img');
        imagen.src = libro.imagen;
    });
}

  // Cargar el archivo JSON y cambiar las imágenes del carrusel al hacer clic en un botón de género
  fetch(url)
      .then(response => response.json())
      .then(data => {
          const botonesGenero = document.querySelectorAll('.genero');
          botonesGenero.forEach(boton => {
              boton.addEventListener('click', function () {
                  const genero = data.libros[this.getAttribute('data-genero')];
                  cambiarImagenes(genero);
              });
          });
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
});



    document.querySelector('button').addEventListener('click', function() {
        const nombres = document.querySelector('input[type="text"]').value;
        const apellidos = document.querySelector('input[type="text"][class="input"]').value;
        const dni = document.querySelector('input[type="text"][class="input1"]').value;
        const hora = document.querySelector('input[type="text"][class="input2"]').value;
        
        const cliente = {
            nombres,
            apellidos,
            dni,
            hora
        };
        
        localStorage.setItem('cliente', JSON.stringify(cliente));
        
        window.location.href = 'registro.html';
    });

