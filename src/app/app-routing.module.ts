import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { PagListadoAutosComponent } from './paginas/pagListadoAutos/pagListadoAutos.component';
import { HomeComponent } from './paginas/Home/Home.component';
import { RegistroClientesComponent } from './paginas/RegistroClientes/RegistroClientes/RegistroClientes.component';
import { PagVehiculoComponent } from './paginas/pagVehiculo/pagVehiculo.component';

const routes: Routes = [
  {
  path:"home",
  component: HomeComponent
  },
  {
  path:"vehiculos",
  component:PagListadoAutosComponent
  },
  {
    path:"Vehiculos/codigo",
    component:PagVehiculoComponent
    },
  {
    path:"",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path:"**",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path:"Clientes",
    component: RegistroClientesComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
