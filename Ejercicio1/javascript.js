const inicio = [0,1];
let suma;
var numeroDeElementos = parseInt(prompt("Ingrese el número de elementos de la serie fibonacci a mostrar"));

if (numeroDeElementos === 0 && numeroDeElementos !== num) {
    alert("Por favor ingrese un número válido");
} else if (numeroDeElementos == 1) {
    alert("la serie fibonacci es: "+0);
} else if (numeroDeElementos == 2) {
    alert("la serie fibonacci es: "+inicio);
}    
function fibonacci (numeroDeElementos){
    const inicio=[0,1];
     for (let i=2;i<numeroDeElementos; i++){
        inicio.push(inicio[i-1]+ inicio[i-2]);
    }
    return inicio;
}
const serie = fibonacci (numeroDeElementos);
alert ("la serie fibonacci es: "+serie);


