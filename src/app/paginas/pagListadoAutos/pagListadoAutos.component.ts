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
    
  }

mostrar(){
  this.mostrarImagenes=!this.mostrarImagenes
}
recepcion(dato:number){
console.log('Dato:',dato);
}


}
