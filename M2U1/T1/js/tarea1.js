var fondo = document.querySelector('body');

function devuelveid(clicked_id){
    let cuadrado = clicked_id;
    let cuadradosel = document.getElementById(cuadrado);

    let colordecuadrado = window.getComputedStyle(cuadradosel).backgroundColor;
    fondo.style.backgroundColor = colordecuadrado;

    console.log(cuadrado);
}