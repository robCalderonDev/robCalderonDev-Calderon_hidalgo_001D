import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasPage } from './recetas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasPage
  },  {
    path: 'receta1',
    loadChildren: () => import('./receta1/receta1.module').then( m => m.Receta1PageModule)
  },
  {
    path: 'receta2',
    loadChildren: () => import('./receta2/receta2.module').then( m => m.Receta2PageModule)
  },
  {
    path: 'receta3',
    loadChildren: () => import('./receta3/receta3.module').then( m => m.Receta3PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasPageRoutingModule {}
