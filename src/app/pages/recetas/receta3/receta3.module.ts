import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receta3PageRoutingModule } from './receta3-routing.module';

import { Receta3Page } from './receta3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receta3PageRoutingModule
  ],
  declarations: [Receta3Page]
})
export class Receta3PageModule {}
