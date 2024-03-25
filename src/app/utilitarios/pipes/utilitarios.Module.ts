import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./AEspacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";
import { CommonModule } from "@angular/common";
import { PagVehiculoComponent } from "../../paginas/pagVehiculo/pagVehiculo.component";


@NgModule({
declarations:[
    AEspacioPipe,
    CalificacionComponent
],
imports:[
CommonModule

],
exports:[
    AEspacioPipe, 
    CalificacionComponent
    
]


})

export class utilitariosModule{}
