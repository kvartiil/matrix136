import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpagePrgnRbtPageRoutingModule } from './subpagePrgnRbt-routing.module';

import { SubpagePrgnRbtPage } from './subpagePrgnRbt.page';

import { PrgnRbtComponent } from '../matrixPrgnRbt/matrixPrgnRbt.component';
import { PPrgnRbtComponent } from '../matrixPrgnRbt/matrix-probot-msg/matrix-probot-msg.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpagePrgnRbtPageRoutingModule
  ],
  declarations: [SubpagePrgnRbtPage, PrgnRbtComponent, PPrgnRbtComponent]
})
export class SubpagePageModule {}