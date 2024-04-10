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