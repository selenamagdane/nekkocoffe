document.querySelectorAll('.carrito').forEach(button => {
    button.addEventListener('click', () => {
      var modal = new bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
    });
  });