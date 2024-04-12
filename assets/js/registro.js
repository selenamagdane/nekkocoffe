//DATOS DEL CLIENTE
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nombres = urlParams.get('nombres');
    const apellidos = urlParams.get('apellidos');
    const dni = urlParams.get('dni');
    const hora = urlParams.get('hora');
    const libros =urlParams.get('libros').split(',');
    
    document.querySelector('#nombres').innerHTML = nombres;
    document.querySelector('#apellidos').innerHTML = apellidos;
    document.querySelector('#dni').innerHTML = dni;
    document.querySelector('#hora').innerHTML = hora;

    const $libros = document.querySelector("#libros");

    for (const libro of libros) {
        if (libro != "") {
            $libros.innerHTML += `<span>${libro}</span><br />`;
        }
    }
};