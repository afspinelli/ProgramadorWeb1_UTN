var x=1;
var cantidad=0;

var numero=[];
var indice=0;

var mayor=0

cantidad=prompt('Ingrese la cantidad de números a revisar ' + ':','');

document.write('Números ingresados (' + cantidad + '):' + '<br>' + '<br>');

while (x<=cantidad){
    numero[indice]=prompt('Ingrese el número '+ x +' de ' + cantidad + ':','');
    document.write(numero[indice] + '<br>');

    numero[indice]=parseInt(numero[indice]);
    mayor=parseInt(mayor);

    if (numero[indice]>mayor)
    {
        mayor=numero[indice];
    }

    indice=indice+1;
    x=x+1;
}

document.write('<br>' + 'El mayor de todos es el: ' + mayor);