import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';

import { SwiperModule } from 'swiper/angular';
import { HtmlPipe } from '../html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    SwiperModule,
  ],
  declarations: [DetailPage, HtmlPipe],
})
export class DetailPageModule {}
