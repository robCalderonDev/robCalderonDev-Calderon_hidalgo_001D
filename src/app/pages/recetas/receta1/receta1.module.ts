import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receta1PageRoutingModule } from './receta1-routing.module';

import { Receta1Page } from './receta1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receta1PageRoutingModule
  ],
  declarations: [Receta1Page]
})
export class Receta1PageModule {}
