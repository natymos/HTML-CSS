import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagListadoAutos',
  templateUrl: './pagListadoAutos.component.html',
  styleUrls: ['./pagListadoAutos.component.css']
})
export class PagListadoAutosComponent implements OnInit {
  mostrarImagenes=true;
  filtro:string=""
  constructor() { }

  ngOnInit() {
  }
mostrar(){
  this.mostrarImagenes=!this.mostrarImagenes
}

public ListadoAutos: Array <any> = [
  {"foto":null,"marca":"TOTOYA","modelo":"Corolla Cross high","anio":2021,"color":"rojo","kilometros":15000,"precio":34000,"calificacion":5},
  {"foto":"https://images.pexels.com/photos/13024626/pexels-photo-13024626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","marca":"Alfa Romeo","modelo":"Giulietta Super","anio":2018,"color":"rojo","kilometros":46000,"precio":371.000,"calificacion":3},
  {"foto":null,"marca":"BMW","modelo":"340i","anio":2023,"color":"Azul","kilometros":16500,"precio":55900,"calificacion":4},
  {"foto":null,"marca":"Ferrary","modelo":"sf90","anio":2023,"color":"rojo","kilometros":85000,"precio":575.445,"calificacion":4},
  {"foto":null,"marca":"Mercedez Benz","modelo":"AMG GT53","anio":2019,"color":"gris","kilometros":25000,"precio":120000,"calificacion":3},
  {"foto":null,"marca":"Rolls Royce","modelo":"Cullinan","anio":2022,"color":"gris","kilometros":88000,"precio":482.900,"calificacion":5}
]; 


}
