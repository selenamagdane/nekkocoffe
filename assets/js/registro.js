
    window.onload = function() {
        const cliente = JSON.parse(localStorage.getItem('cliente'));
        
        if (cliente) {
            document.querySelector('input[type="text"]').value = cliente.nombres;
            document.querySelector('input[type="text"][class="input"]').value = cliente.apellidos;
            document.querySelector('input[type="text"][class="input1"]').value = cliente.dni;
            document.querySelector('input[type="text"][class="input2"]').value = cliente.hora;
        }
    };
