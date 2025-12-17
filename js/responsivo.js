document.addEventListener("DOMContentLoaded", function () {
function cambiarNav () { 
    const navEscritorio = document.getElementById ("navEscritorio");
    const navMovil = document.getElementById("navMovil");

    if (!navEscritorio || !navMovil) {
        console.error("No se encontraron los elementos navEscritorio o navMovil");
        return;
    }

if (window.innerWidth < 1024){
    navEscritorio.style.setProperty("display", "none");
    navMovil.style.setProperty("display", "flex");
}

else {navEscritorio.style.setProperty("display", "flex");
    navMovil.style.setProperty("display", "none");
}
}
cambiarNav();
window.addEventListener("resize", cambiarNav);});
