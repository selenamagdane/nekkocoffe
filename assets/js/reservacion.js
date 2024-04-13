document.addEventListener("DOMContentLoaded", function() {
    const innerContainer = document.getElementById("innerContainer");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.parentNode.id === "innerContainer") {
                // Si el botón ya está dentro del innerContainer, lo movemos fuera
                document.querySelector(".col").appendChild(this);
            } else if (innerContainer.children.length === 0) {
                // Si no hay botón dentro del innerContainer, permitimos que este entre
                innerContainer.appendChild(this);
                // Deshabilitamos los demás botones
                buttons.forEach(btn => {
                    if (btn !== this) {
                        btn.disabled = true;
                    }
                });
            }
        });
    });
});

// Obtiene la fecha y hora actual
var fechaHoraActual = new Date();

// Obtiene la parte de la hora en formato HH:MM
var horaActual = fechaHoraActual.getHours() + ':' + fechaHoraActual.getMinutes();

// Establece la hora actual en el campo de entrada
document.getElementById('horaActual').value = horaActual;



//DATOS DEL CLIENTE

const guardarBtn = document.getElementById('reserva');

guardarBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombres = document.querySelector('.input-nombres').value;
    const apellidos = document.querySelector('.input-apellidos').value;
    const dni = document.querySelector('.input-dni').value;
    const hora = document.querySelector('.input-hora').value;

    // Verificar que los campos obligatorios estén llenos
    if (nombres.trim() === '' || apellidos.trim() === '' || dni.trim() === '' || hora.trim() === '') {
        alert('Por favor, llene todos los campos obligatorios.');
        return; // Evita que el código siguiente se ejecute si hay campos vacíos
    }

    // Si todos los campos están llenos, redirige a la otra página con los datos como parámetros en la URL
    window.location.href = `reservacionesregistro.html?nombres=${nombres}&apellidos=${apellidos}&dni=${dni}&hora=${hora}`;
});