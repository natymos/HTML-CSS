import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagListadoAutos',
  templateUrl: './pagListadoAutos.component.html',
  styleUrls: ['./pagListadoAutos.component.css']
})
export class PagListadoAutosComponent implements OnInit {
  mostrarImagenes=true;
  private _filtro:string ="";

  get filtro(){
    return this._filtro
  }

  set filtro(data:string){
    this._filtro=data;
    this.consultaVehiculos();
  }
 
  @Input() valor:string='';
  ListadoAutos:Array<any> =[];
 
  formulario: FormGroup
  constructor(
    private VehiculoService: VehiculoService,
    private formBuilder:FormBuilder
  ) {    
    this.formulario = this.formulario.group({
"codigo":[],
"marca":[],
"modelo":[],
"color":[],
"anio":[],
"kilometraje":[],
"precio":[],
"calificacion":[],
"precio":[]

    });
  }

  ngOnInit() {
    this.consultaVehiculos();
  }
     
mostrar(){
  this.mostrarImagenes=!this.mostrarImagenes
}
consultaVehiculos(){
  this.VehiculoService.getVehiculos(this.filtro).subscribe(data => {
    this.ListadoAutos=data;
  })
}

recepcion (dato:number){
console.log('Dato:',dato);
}



}
