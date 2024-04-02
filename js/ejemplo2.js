var nom,anio,edad;
nom=prompt("Ingrese el nombre: ");
anio=parseInt(prompt("Año de nacimiento: "));
edad=2024-anio;
if(edad>=18){
    document.write(nom+" eres MAYOR de edad");
}
else{
    document.write(nom+" eres MENOR de edad");
}
dia=parseInt(prompt("ingrese un numero de dia entre 1 y 7: "));
switch(dia){
    case 1: alert("Lunes");break;
    case 2: alert("Martes");break;
    case 3: alert("Miercoles");break;
    case 4: alert("Jueves");break;
    case 5: alert("Viernes");break;
    case 6: alert("Sabado");break;
    case 7: alert("Domingo");break;
    default: alert("Fuera de rango");
}
