document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      const productContainer = this.closest('.image-with-text');
      const productName = productContainer.querySelector('p').textContent;
      const productPrice = productContainer.querySelector('.card-text').textContent;
  
      // Crear un nuevo elemento div para representar la compra
      const newPurchase = document.createElement('div');
      newPurchase.classList.add('purchase');
      
      // Crear contenido HTML para la compra
      newPurchase.innerHTML = `
        <p>${productName}</p>
        <p>${productPrice}</p>
      `;
      
      // Agregar la nueva compra al div con clase 'card-body'
      const cardBody = document.querySelector('.card-bodyy');
      cardBody.appendChild(newPurchase);
    });
  });
  