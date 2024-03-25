import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-pagListadoAutos',
  templateUrl: './pagListadoAutos.component.html',
  styleUrls: ['./pagListadoAutos.component.css']
})
export class PagListadoAutosComponent implements OnInit {
  mostrarImagenes=true;
  filtro:string="";

  @Input() valor:string='';
  ListadoAutos:Array<any> =[];

  constructor(
    private VehiculoService: VehiculoService
  ) {  }

  ngOnInit() {
  this.ListadoAutos=this.VehiculoService.getVehiculos();
    this.VehiculoService.addVehiculo({"codigo":"A008","foto":null,"marca":"Rolls Royce","modelo":"Cullinan III","anio":2023,"color":"gris","kilometraje":90000,"precio":550000,"calificacion":4});
    this.VehiculoService.addVehiculo({"codigo":"A009","foto":null,"marca":"Rolls Royce","modelo":"Cullinan I","anio":2020,"color":"gris","kilometraje":90000,"precio":450000,"calificacion":3})
  }

mostrar(){
  this.mostrarImagenes=!this.mostrarImagenes
}
recepcion(dato:number){
console.log('Dato:',dato);
}


}
