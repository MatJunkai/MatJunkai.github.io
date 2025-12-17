document.addEventListener("DOMContentLoaded",
    function mostrarObjetos() {
    const objetos = document.querySelectorAll('.oculto');

    objetos.forEach((objeto, index) => {
        setTimeout(() => {
            objeto.classList.add('visible');
        }, index * 600); // Retraso en cascada (500ms entre cada uno)
    });
});
