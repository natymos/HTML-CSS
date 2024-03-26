import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../servicios/Vehiculo.service';
import { Vehiculo } from '../../../utilitarios/modelos/Vehiculo';

@Component({
  selector: 'app-pagVehiculoRegistro',
  templateUrl: './pagVehiculoRegistro.component.html',
  styleUrls: ['./pagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  
  Vehiculo: Vehiculo
  constructor(
    private vehiculoServicio:VehiculoService
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
  }

  ngOnInit() {
  }
guardar(){
  this.vehiculoServicio.addVehiculo(this.Vehiculo);
console.log('Grabado con éxito')
}
}
