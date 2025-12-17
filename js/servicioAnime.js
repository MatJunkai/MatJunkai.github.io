document.addEventListener('DOMContentLoaded', function() {
    const contenedores = document.querySelectorAll('.oculto'); // Selecciona todos los divs ocultos

    setTimeout(function() {
        contenedores.forEach(function(contenedor) {
            contenedor.classList.add('visible');
        });
    }, 3000); // 3000 milisegundos = 3 segundos de retardo
});