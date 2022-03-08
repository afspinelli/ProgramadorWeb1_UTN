var areadetexto = document.getElementById('cuadrodetexto');
var contador = document.getElementById("contador");

areadetexto.addEventListener('keyup', function(){
    contador.innerText = areadetexto.value.length;
});
