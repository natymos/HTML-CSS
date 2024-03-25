import { NgModule } from '@angular/core';
import { PagListadoAutosComponent} from "./pagListadoAutos/pagListadoAutos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { utilitariosModule } from '../utilitarios/pipes/utilitarios.Module';
import { CalificacionComponent } from '../utilitarios/pipes/componentes/calificacion/calificacion.component';


@NgModule({
    declarations: [
        PagListadoAutosComponent,
       
    ],
    imports: [
        CommonModule,
    FormsModule,
    utilitariosModule,
    
],
    exports: [
        PagListadoAutosComponent,
        CalificacionComponent  
    ],
    providers: [],
})
export class paginaModule {

}