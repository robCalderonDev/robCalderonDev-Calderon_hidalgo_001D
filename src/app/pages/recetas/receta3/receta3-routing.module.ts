import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receta3Page } from './receta3.page';

const routes: Routes = [
  {
    path: '',
    component: Receta3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receta3PageRoutingModule {}
