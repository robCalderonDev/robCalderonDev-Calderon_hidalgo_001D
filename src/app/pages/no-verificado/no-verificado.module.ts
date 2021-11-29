import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoVerificadoPageRoutingModule } from './no-verificado-routing.module';

import { NoVerificadoPage } from './no-verificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoVerificadoPageRoutingModule
  ],
  declarations: [NoVerificadoPage]
})
export class NoVerificadoPageModule {}
