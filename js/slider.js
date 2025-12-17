/*DEFINICION Y CONFIGURACION INICIAL*/

//crear una variablie que muestra la primera diapositiva
let sliderIndex = 1;

//crear una funcion para que vela la primera y las demas diapositivas
showSlider(sliderIndex);

//funcion traida del html para avanzar y retroceder

function plusSlider(n) {
  showSlider((sliderIndex += n));
}
/*
La funcion plusSlider (n) se usa para vanzar y retroceder en las diapositivas
n es un numero que puede ser positivo (para avanzar) o negativo (para retroceder)

Al ejecutar showSlider(sliderIndex += n);, se suma (o se resta) el valor de n al inidice actual
(showIndex) y muestra la diapositiva elegida

*/

//funcion para ir a una diapostiva especifica en DOT(circulos o puntos)

function currentSlide(n) {
  showSlider((sliderIndex = n));
}

/*
La funcion currentSlide(n); , se usa para saltar directamnete de una diapositva elegida
n es el numero de la diapositva a la que queremos ir.
se actualiza el sliderIndex con el valor de (n) y luego showSlider para que se muestre.
*/

//FUNCION PRINCIPAL showSlider

/*
OBTENER ELEMENTOS
slides --> es una lista de todas las diapositivas y elementos con la clase  mySlider
puntos (variables)-->es una lista de los puntos/circulos grises debajo de la diapositiva (class=dot)
y muestra la diapositiva activa

i (variable para haga bucle)--> se usa para crear un bucle o ciclo que recorre las listas de diapositivas slides/puntos. Necesitamos
que esa variable represente el indice de cada elemento de las listas
--------------------------------

CICLO DE CONTROL
si n (el indice) es mayor que el numero total de las diapositivas (length), reinicia sliderIndex y vuelve a 1.

si n (el indice) es menor que 1, se ajusta al numero de la ultima diapositiva (asi el slider rebota al llegar al inicio, final o principio)

*/

function showSlider(n) {
  //OBTENER ELEMENTOS DEL HTML
  let i;
  let slides = document.getElementsByClassName("mySlider");
  let puntos = document.getElementsByClassName("dot");

  //CICLO
  if (n > slides.length) {
    sliderIndex = 1;
  }
  if (n < 1) {sliderIndex = slides.length}

//CONDICION ocultar o mostrar

for (i = 0; i < slides.length; i++){

slides[i].style.display = "none";
}

for (i = 0; i < puntos.length; i++){
    puntos[i].className = puntos[i] .className.replace("active","")
}

slides [sliderIndex-1].style.display = "block";
dots[sliderIndex-1].className += "active";

}
