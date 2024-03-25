import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/vehiculo';

@Component({
  selector: 'app-pagVehiculo',
  templateUrl: './pagVehiculo.component.html',
  styleUrls: ['./pagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  Vehiculo:Vehiculo ={
    codigo:"001",
    marca:"totoya",
    modelo:"corolla cross"
   
  }

  constructor() { }

  ngOnInit() {
  }

}
