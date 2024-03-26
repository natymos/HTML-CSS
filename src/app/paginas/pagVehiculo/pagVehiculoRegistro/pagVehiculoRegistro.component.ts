import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../servicios/Vehiculo.service';
import { Vehiculo } from '../../../utilitarios/modelos/Vehiculo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagVehiculoRegistro',
  templateUrl: './pagVehiculoRegistro.component.html',
  styleUrls: ['./pagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  
  Vehiculo: Vehiculo
  formulario:FormGroup
  constructor(
    private vehiculoServicio:VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.Vehiculo ={
      codigo:'',
      marca:'',
      color:'',
      modelo: '',
      kilometraje:0,
      precio:0,
      foto:null,
      anio: 0,
      calificacion:0,
    }
  
   
  this.formulario = this.formBuilder.group({
    "codigo":[],
    "marca":[],
    "modelo":[],
    "color":[],
    "anio":[],
    "kilometraje":[],
    "precio":[],
    "calificacion":[]
        });
  }
  ngOnInit() {
  }

guardar(){
  let vehiculo:Vehiculo={...this.formulario.value};
  this.vehiculoServicio.addVehiculo(vehiculo);
  
console.log('formulario', this.formulario.value);
}
}