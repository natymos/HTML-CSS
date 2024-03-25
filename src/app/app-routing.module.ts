import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { PagListadoAutosComponent } from './paginas/pagListadoAutos/pagListadoAutos.component';
import { HomeComponent } from './paginas/Home/Home.component';

const routes: Routes = [
  {
  path:"home",
  component: HomeComponent
  },
  {
  path:"vehiculos",
  component:PagListadoAutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
