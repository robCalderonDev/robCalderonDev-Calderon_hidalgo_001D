import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receta2PageRoutingModule } from './receta2-routing.module';

import { Receta2Page } from './receta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receta2PageRoutingModule
  ],
  declarations: [Receta2Page]
})
export class Receta2PageModule {}
