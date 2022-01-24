import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApresentationPageRoutingModule } from './apresentation-routing.module';

import { ApresentationPage } from './apresentation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApresentationPageRoutingModule,
  ],
  declarations: [ApresentationPage],
  exports: [ApresentationPage],
})
export class ApresentationPageModule {}
