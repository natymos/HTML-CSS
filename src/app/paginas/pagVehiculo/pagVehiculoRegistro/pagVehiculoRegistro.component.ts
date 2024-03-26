import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../servicios/Vehiculo.service';
import { Vehiculo } from '../../../utilitarios/modelos/Vehiculo';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    "codigo":['',[Validators, RequiredValidator, validadorCodigo]],
    "marca":['',[Validators, RequiredValidator]],
    "modelo":['',[Validators, RequiredValidator]],
    "color":['',[Validators, RequiredValidator]],
    "anio":['',[Validators, RequiredValidator]],
    "kilometraje":[],
    "precio":[],
    "calificacion":[]
        });
  }
  ngOnInit() {
  this.formulario.controls['codigo'].disable;
  }

  guardar(){
  let vehiculo:Vehiculo={...this.formulario.value};
  this.vehiculoServicio.addVehiculo(vehiculo);
  Swal.fire({
    title: "Mensaje",
    text: "Se grabó con éxito!",
    icon: "info"
  });
  
console.log('formulario', this.formulario.value);
}
}
export function validadorCodigo():ValidatorFn {
return(control:AbstractControl):ValidationErrors|null =>{
const codigoV = /^\d{3}$/;
let value=control.value
if(codigoV.test(value)){
  return null
}

return {'codigoValidate': true};
}
}