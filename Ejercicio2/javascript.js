const inicio=["una cadena",3,9,1,10,500,1,10,true];
 const resultado=[];
 for (let i=0; i<= inicio.length; i++){
    if (typeof inicio[i]=="number"){
        resultado.push (inicio[i]);
    }
 }
 console.log (resultado);

 let mayor=0
for(let i=0 ; i<resultado.length;i++){
    if (resultado [i]>0){ 
        mayor =resultado[i]
    }
}
console.log (mayor);
