import { NgModule } from '@angular/core';
import { PagListadoAutosComponent} from "./pagListadoAutos/pagListadoAutos.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { utilitariosModule } from '../utilitarios/pipes/utilitarios.Module';
import { CalificacionComponent } from '../utilitarios/pipes/componentes/calificacion/calificacion.component';
import { PagVehiculoComponent } from './pagVehiculo/pagVehiculo.component';
import { RouterModule } from '@angular/router';
import { VehiculoService } from '../servicios/Vehiculo.service';
import { PagVehiculoRegistroComponent } from './pagVehiculo/pagVehiculoRegistro/pagVehiculoRegistro.component';


@NgModule({
    declarations: [
        PagListadoAutosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        
       
       
    ],
    imports: [
        CommonModule,
    FormsModule,
    utilitariosModule,
    RouterModule,
    ReactiveFormsModule,
    
],
    exports: [
        PagListadoAutosComponent,
        CalificacionComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent
        
    ],
    providers: [],
})
export class paginaModule {

}