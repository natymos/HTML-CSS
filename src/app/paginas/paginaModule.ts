import { NgModule } from '@angular/core';
import { PagListadoAutosComponent} from "./pagListadoAutos/pagListadoAutos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { utilitariosModule } from '../utilitarios/pipes/utilitarios.Module';
import { CalificacionComponent } from '../utilitarios/pipes/componentes/calificacion/calificacion.component';
import { PagVehiculoComponent } from './pagVehiculo/pagVehiculo.component';
import { RouterModule } from '@angular/router';
import { VehiculoService } from '../servicios/Vehiculo.service';


@NgModule({
    declarations: [
        PagListadoAutosComponent,
        PagVehiculoComponent,
       
       
    ],
    imports: [
        CommonModule,
    FormsModule,
    utilitariosModule,
    RouterModule
],
    exports: [
        PagListadoAutosComponent,
        CalificacionComponent,
        PagVehiculoComponent
        
    ],
    providers: [],
})
export class paginaModule {

}