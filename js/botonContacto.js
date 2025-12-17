//funcion para abrir formulario

document.getElementById("boton").addEventListener("click",function(){
    const  formulario = document.getElementById("form");
    if(formulario.style.display === "none"){
        formulario.style.display ="block";
    } 
    else{
formulario.style.display = "none";
    }
});



document.addEventListener("DOMContentLoaded", function () {
    function cambiarForm () { 
        const formularioResponsivo = document.getElementById ("form");
        const botonExpandir = document.getElementById("boton");
        
if (window.innerWidth > 1200){
    formularioResponsivo.style.setProperty("display", "block");
    botonExpandir.style.setProperty("display", "none");
}

else {formularioResponsivo.style.setProperty("display", "none");
    botonExpandir.style.setProperty("display", "none");
}
}
});



