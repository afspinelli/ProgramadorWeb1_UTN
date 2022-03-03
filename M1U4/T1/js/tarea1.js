var distancia;
var transporte;

distancia=''
transporte=''

distancia=prompt('Ingrese distancia a recorrer en metros:','');


if (distancia>=0 && distancia<=1000)
    {
        transporte='a pie.';
        document.getElementById("fotoportada").src="img/mdt_pie.png";
    }
    else if (distancia>=1000 && distancia<=10000)
    {
        transporte='en bicicleta.';
        document.getElementById("fotoportada").src="img/mdt_bici.png";
    }
    else if (distancia>=10000 && distancia<=30000)
    {
        transporte='en colectivo.';
        document.getElementById("fotoportada").src="img/mdt_cole.png";
    }
    else if (distancia>=30000 && distancia<=100000)
    {
        transporte='en auto.';
        document.getElementById("fotoportada").src="img/mdt_auto.png";
    }
    else if (distancia>100000)
    {
        transporte='en avion.';
        document.getElementById("fotoportada").src="img/mdt_avion.png";
    }
    else 
    {
        location.reload();
    }

if (distancia!='')
    {
        document.write('Para recorrer ');
        document.write(distancia);
        document.write(' metros se recomienda hacerlo ');
        document.write(transporte);
    }
else
    {
        location.reload();
    }