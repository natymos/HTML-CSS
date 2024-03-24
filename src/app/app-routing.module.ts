import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { PagListadoAutosComponent } from './paginas/pagListadoAutos/pagListadoAutos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
