
var nombrealumno=prompt("Ingresa el nombre del alumno")
var materia=prompt ("Ingresa la materia")
var nota1=parseInt(prompt ("Ingresa la calificación1"))
var nota2=parseInt(prompt ("Ingresa la calificación2"))
var nota3=parseInt(prompt ("Ingresa la calificación3"))

if (isNaN(nota1)|| nota1<0||nota1>10){
        console.log("Por favor, ingrese la calificación1 válida entre 0 y 10")
    }

if (isNaN(nota2)||nota2<0||nota2>10){
        console.log("Por favor, ingrese la calificación2 válida entre 0 y 10")
    }

if (isNaN(nota3)||nota3<0||nota3>10){
        console.log("Por favor, ingrese la calificación3 válida entre 0 y 10")
    } 
   

let promedio= (nota1+nota2+nota3)/3


if (promedio<=10 && promedio>=7){
    console.log("¡Felicidades " +nombrealumno+"!, aprobaste " +materia+" con un promedio de:" +promedio.toFixed(1))
}    
    else if(promedio<7){
      alert("Gracias por el esfuerzo "+nombrealumno+", nos vemos pronto en clase. El promedio es: "+promedio.toFixed(1))
}