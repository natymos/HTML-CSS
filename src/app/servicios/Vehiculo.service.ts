import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor() { }

getVehiculos(){
  return this.ListadoAutos;
}

private ListadoAutos: Array <any> = [
  {"foto":null,"marca":"TOTOYA","modelo":"Corolla Cross high","anio":2021,"color":"rojo","kilometros":15000,"precio":340000,"calificacion":5},
  {"foto":"https://images.pexels.com/photos/13024626/pexels-photo-13024626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","marca":"Alfa Romeo","modelo":"Giulietta Super","anio":2018,"color":"rojo","kilometros":46000,"precio":371000,"calificacion":3},
  {"foto":null,"marca":"BMW","modelo":"340-i","anio":2023,"color":"Azul","kilometros":16500,"precio":559000,"calificacion":4},
  {"foto":null,"marca":"Ferrary","modelo":"sf-90","anio":2023,"color":"rojo","kilometros":85000,"precio":575400,"calificacion":4},
  {"foto":null,"marca":"Mercedez Benz","modelo":"AMG GT-53","anio":2019,"color":"gris","kilometros":25000,"precio":120000,"calificacion":3},
  {"foto":null,"marca":"Rolls Royce","modelo":"Cullinan","anio":2022,"color":"gris","kilometros":88000,"precio":482000,"calificacion":5}
]; 

}
