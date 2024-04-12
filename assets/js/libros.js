// Variable global para almacenar los títulos de los libros seleccionados
let titulosLibros = '';

document.addEventListener('DOMContentLoaded', function () {
    // URL del archivo JSON
    const url = './assets/JSON/libros.json';

    // Obtener referencia al carrusel y su contenedor
    const carouselInner = document.getElementById('carouselExampleIndicators');

    
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

// Función para cambiar las imágenes del carrusel según el género seleccionado
function cambiarImagenes(genero) {
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Eliminar los event listeners anteriores de los botones Agregar
    carouselItems.forEach(carouselItem => {
        const btnAgregar = carouselItem.querySelector('.btn');
        btnAgregar.removeEventListener('click', mostrarTitulo);
    });

    // Asignar los libros y agregar los nuevos event listeners
    carouselItems.forEach((carouselItem, index) => {
        const libro = genero[index];
        const imagen = carouselItem.querySelector('img');
        imagen.src = libro.imagen;

        // Agregar evento al botón Agregar de cada item del carrusel
        const btnAgregar = carouselItem.querySelector('.btn');
        btnAgregar.addEventListener('click', function() {
            mostrarTitulo(libro);
        });
    });
}

function mostrarTitulo(libro) {
    // Verificar si el título ya ha sido agregado antes de agregarlo
    if (!titulosLibros.includes(libro.titulo)) {
        // Agregar el título del libro al textarea y a la variable global
        const textarea = document.getElementById('CntLibros');
        titulosLibros += libro.titulo + '\n';
        textarea.value = titulosLibros;

        textarea.style.height = 'auto'; 
        textarea.style.height = (textarea.scrollHeight + 2) + 'px';

        const factura = document.getElementById("factura");
        factura.style.height = `${factura.scrollHeight}px`;
    }
}

//HORA

// Obtiene la fecha y hora actual
var fechaHoraActual = new Date();

// Obtiene la parte de la hora en formato HH:MM
var horaActual = fechaHoraActual.getHours() + ':' + fechaHoraActual.getMinutes();

// Establece la hora actual en el campo de entrada
document.getElementById('horaActual').value = horaActual;

//DATOS DEL CLIENTE

const guardarBtn = document.getElementById('guardarBtn');

guardarBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombres = document.querySelector('.input-nombres').value;
    const apellidos = document.querySelector('.input-apellidos').value;
    const dni = document.querySelector('.input-dni').value;
    const hora = document.querySelector('.input-hora').value;
    const libros = titulosLibros.trim().split("\n");

    // Verificar que los campos obligatorios estén llenos
    if (nombres.trim() === '' || apellidos.trim() === '' || dni.trim() === '' || hora.trim() === '' || libros[0].trim() === '') {
        alert('Por favor, llene todos los campos obligatorios.');
        return; // Evita que el código siguiente se ejecute si hay campos vacíos
    }

    // Si todos los campos están llenos, redirige a la otra página con los datos como parámetros en la URL
    window.location.href = `registro.html?nombres=${nombres}&apellidos=${apellidos}&dni=${dni}&hora=${hora}&libros=${libros}`;
});