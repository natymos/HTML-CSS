import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagListadoAutosComponent } from './paginas/pagListadoAutos/pagListadoAutos.component';
import { paginaModule } from './paginas/paginaModule';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    paginaModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
