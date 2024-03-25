import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


constructor() { }

getVehiculos(){
  return this.ListadoAutos;
}
getVehiculo(codigo:string):Vehiculo|undefined{
  let Vehiculo= this.ListadoAutos.find ( ele => {
    return ele.codigo === codigo;
  } );
  return Vehiculo;
}

addVehiculo(Vehiculo:Vehiculo){
  this.ListadoAutos.push(Vehiculo);
}

private ListadoAutos: Array <Vehiculo> = [
  {"codigo":"A001","foto":null,"marca":"TOTOYA","modelo":"Corolla Cross high","anio":2021,"color":"rojo","kilometraje":15000,"precio":340000,"calificacion":5},
  {"codigo":"A002","foto":"https://images.pexels.com/photos/13024626/pexels-photo-13024626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","marca":"Alfa Romeo","modelo":"Giulietta Super","anio":2018,"color":"rojo","kilometraje":46000,"precio":371000,"calificacion":3},
  {"codigo":"A003","foto":null,"marca":"BMW","modelo":"340-i","anio":2023,"color":"Azul","kilometraje":16500,"precio":559000,"calificacion":4},
  {"codigo":"A004","foto":null,"marca":"Ferrary","modelo":"sf-90","anio":2023,"color":"rojo","kilometraje":85000,"precio":575400,"calificacion":4},
  {"codigo":"A005","foto":null,"marca":"Mercedez Benz","modelo":"AMG GT-53","anio":2019,"color":"gris","kilometraje":25000,"precio":120000,"calificacion":3},
  {"codigo":"A006","foto":null,"marca":"Rolls Royce","modelo":"Cullinan","anio":2022,"color":"gris","kilometraje":88000,"precio":482000,"calificacion":5},
  {"codigo":"A007","foto":null,"marca":"Rolls Royce","modelo":"Cullinan II","anio":2023,"color":"gris","kilometraje":90000,"precio":500000,"calificacion":4}
]; 

}
