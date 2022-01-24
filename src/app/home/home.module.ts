import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { ApresentationPageModule } from '../apresentation/apresentation.module';
import { RegisterPageModule } from '../register/register.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    ApresentationPageModule,
    RegisterPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
