import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { PagListadoAutosComponent } from './paginas/pagListadoAutos/pagListadoAutos.component';
import { HomeComponent } from './paginas/Home/Home.component';
import { RegistroClientesComponent } from './paginas/RegistroClientes/RegistroClientes/RegistroClientes.component';
import { PagVehiculoComponent } from './paginas/pagVehiculo/pagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/pagVehiculo/pagVehiculoRegistro/pagVehiculoRegistro.component';

const routes: Routes = [
  {
  path:"home",
  component: HomeComponent
  },
  {
  path:"Vehiculos",
  component:PagListadoAutosComponent
  },
  {
    path:"vehiculo/:codigo",
    component:PagVehiculoComponent
    },
    {
      path:"vehiculo",
      component:PagVehiculoRegistroComponent
      },
  {
    path:"",
    component: HomeComponent,
    pathMatch:"full"
  },
  
  {
    path:"vehiculo",
    component: PagVehiculoComponent ,
    
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
