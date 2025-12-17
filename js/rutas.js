//funcion para cargar el contenido del html dentro del contenedor
/*jshint esversion: 6*/

function loadHtml(elementId, filePath) {
    //fetch: se utiliza para  obtener el contenido de archivos distintos(header y footer)
  
    fetch(filePath)
      //then:procesa la respuesta y convierte el html que luego se incerta en los elementos IDS (header, footer)
  
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar${filePath}:${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        document.getElementById(elementId).innerHTML = html;
      })
      //catch: maneja cualquier error diferente
      .catch((error) => console.error(error));
  }
  loadHtml("index", "/src/index.html");
  // loadHtml("footer", "");
  loadHtml("nav", "/src/nav.html");
  // loadHtml("footerGeneral", "/");

  loadHtml("ondas", "/src/ondas.html");

  loadHtml("iconosFooter", "/src/footer.html");
  
  loadHtml("servicios", "/src/servicios.html");

  loadHtml("estudio", "/src/elEstudio.html");
  


  

