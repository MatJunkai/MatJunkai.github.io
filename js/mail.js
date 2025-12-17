// <!-- SDK de EmailJS -->
/* <script src="https://cdn.emailjs.com/dist/email.min.js"></script> */

  // Inicializar EmailJS
  (function(){
    emailjs.init("Id_yULddY5iuJZ_5I"); // Reemplaza con tu Public Key
  })();

  // Mostrar/Ocultar el formulario
  document.getElementById("boton").addEventListener("click", function() {
    const form = document.getElementById("formularioContacto");
    form.style.display = form.style.display === "none" ? "block" : "none";
  });

  // Enviar el formulario con EmailJS
  document.getElementById("formularioContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_kbcx757", "template_8lzon7c", this)
      .then(function() {
        alert("Mensaje enviado correctamente.");
        document.getElementById("formularioContacto").reset();
      }, function(error) {
        alert("Error al enviar el mensaje. Intenta de nuevo.");
        console.log(error);
      });
  });
