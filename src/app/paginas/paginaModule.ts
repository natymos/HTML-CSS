import { NgModule } from '@angular/core';
import { PagListadoAutosComponent} from "./pagListadoAutos/pagListadoAutos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PagListadoAutosComponent 
    ],
    imports: [CommonModule,
    FormsModule],
    exports: [
        PagListadoAutosComponent 
    ],
    providers: [],
})
export class paginaModule {

}