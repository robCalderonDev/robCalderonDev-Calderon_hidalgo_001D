import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoVerificadoPage } from './no-verificado.page';

const routes: Routes = [
  {
    path: '',
    component: NoVerificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoVerificadoPageRoutingModule {}
