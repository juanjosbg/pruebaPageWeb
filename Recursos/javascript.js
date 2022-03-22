const { set } = require("express/lib/application");

const slider = document.querySelector("slider");

let sliderSection = document.querySelectorAll("slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnatras = document.querySelector("#btn-atras");
const btnadelante = document.querySelector("#btn-adelante");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function movimientoDer(){
    let sliderSectionFirst = document.querySelectorAll("slider-section")[0];
    slider.style.marginLeft= "-200%"
    slider.style.transition = "all 0.5s";
   setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft="-100%";
   }, 500);
}
btnadelante.addEventListener('click', function(){
    movimientoDer();
});
function movimientoIzq(){
    let sliderSection = document.querySelectorAll("slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft= "0"
    slider.style.transition = "all 0.5s";
   setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft="-100%";
   }, 500);
}
btnadelante.addEventListener('click', function(){
    movimientoDer();
});

btnatras.addEventListener('click', function(){
    movimientoIzq();
});




