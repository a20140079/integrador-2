alert("Ejercicio integrador 2");
alert("Este es la trivia de la primavera");
nom=prompt("Ingresa tu nombre");
res1=prompt("¿Cómo se llama el primer día de la primavera?\nA:Primer dia de la primavera\nB:Equinoccio de primavera\nC:Equinccio de invierno")
if (res1=="A"){
    res1=0
}
else if(res1=="B"){
    res1=25
}
else if(res1=="C"){
    res1=0
}
else{
alert(nom , "no es una opcion valida")
}

res2=prompt("¿Que sucede en el polo norte en primavera?\nA:6 mese de luz\nB:6 meses de oscuridad\nC:6 meses de luz y oscuridad")
if (res2=="A"){
    res2=0
}
else if(res2=="B"){
    res2=0
}
else if(res2=="C"){
    res2=25
}
else{
alert(nom, "no es una opcion valida")
}

document.write(total =res1 + res2)
if(total >= 25){
    document.write(nom , "sabes de primavera")
}
else{    
    document.write(nom , "te falta")

}