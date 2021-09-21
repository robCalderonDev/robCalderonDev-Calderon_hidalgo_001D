import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receta1Page } from './receta1.page';

const routes: Routes = [
  {
    path: '',
    component: Receta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receta1PageRoutingModule {}
