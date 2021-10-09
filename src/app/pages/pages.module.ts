import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { RatingModule } from 'ng-starrating';

import { FormsModule } from '@angular/forms';
import { DetalleIdComponent } from './detalle-id/detalle-id.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    InicioComponent,
    DetalleIdComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RatingModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
