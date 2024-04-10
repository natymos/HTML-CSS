import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../servicios/Vehiculo.service';
import { Vehiculo } from '../../../utilitarios/modelos/Vehiculo';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagVehiculoRegistro',
  templateUrl: './pagVehiculoRegistro.component.html',
  styleUrls: ['./pagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  
  Vehiculo?: Vehiculo
  formulario:FormGroup
  
  constructor(
    private activatedRoute:ActivatedRoute,
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
    "codigo":['',[Validators.required, validadorCodigo()]], 
    "marca":['',[Validators.required,]],
    "modelo":['',[Validators.required,]],
    "color":[],
    "anio":[],
    "kilometraje":[],
    "precio":[],
    "calificacion":[]
        },
        {
          validators: validarCodigoComparativo
        });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.vehiculoServicio.getVehiculo(params['codigo']).subscribe (data =>{
        this.Vehiculo = data;    
        this.formulario.controls['codigo'].setValue(this.Vehiculo?.marca);
        this.formulario.controls['marca'].setValue(this.Vehiculo?.marca);
        this.formulario.controls['modelo'].setValue(this.Vehiculo?.marca);
      })

    })
  this.formulario.controls['codigo'].disable;
  
  }

  guardar(){
  //let vehiculo:Vehiculo={...this.formulario.value};
  //this.vehiculoServicio.addVehiculo(vehiculo);
  //Swal.fire({
  //  title: "Mensaje",
  //  text: "Se grabó con éxito!",
  //  icon: "info"
  //});
  
  if (this.formulario.valid){
    alert("grabado con éxito")
  }
  else {
    alert("Te faltan campos por llenar")
  }
  


console.log('formulario', this.formulario.value);
}
}
export function validadorCodigo():ValidatorFn {
  return(control:AbstractControl):ValidationErrors|null =>{
    const codigoV = /^[A-Z]\d{4}$/;
    let value=control.value;
    if(codigoV.test(value)){
      return null
  }
  return{'codigoValidate':true};
}
}

export function validarCodigoComparativo(){
return(formulario:FormGroup): ValidationErrors|null =>{
   let valor = formulario.controls['codigo'].value;
    let valor2 =formulario.controls['codigo_confirm'].value;
    if(valor === valor2){
      return null;
  }
return {'codigo_comparativo':true};
  }
}