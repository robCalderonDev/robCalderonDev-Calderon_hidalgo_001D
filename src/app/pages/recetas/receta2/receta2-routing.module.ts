import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receta2Page } from './receta2.page';

const routes: Routes = [
  {
    path: '',
    component: Receta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receta2PageRoutingModule {}
