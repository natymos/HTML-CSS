import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-pagVehiculo',
  templateUrl: './pagVehiculo.component.html',
  styleUrls: ['./pagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  Vehiculo?:Vehiculo={
    codigo:"",
    marca:"",
    modelo:""
  }
  constructor(
    private route: ActivatedRoute,
    private VehiculoService:VehiculoService
  ) { }



  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.Vehiculo= this.VehiculoService.getVehiculo(params['codigo'])
    })
  }

}
