import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleIdComponent } from './detalle-id/detalle-id.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
