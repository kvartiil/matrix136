import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { NgxGaugeModule } from 'ngx-gauge';
import {MatSliderModule} from '@angular/material/slider';
import { SeamlessInputModule } from '../matrixTinHau/seamless-input/seamless-input.module';

import { Tab4PageRoutingModule } from './tab4-routing.module';

//import { NgApexchartsModule } from 'ng-apexcharts';

//import { AutoChartComponent } from '../matrixAutoChart/matrixAutoChart.component';
import { CentralComponent } from '../matrixCentral/matrixCentral.component';
import { InClckTwComponent } from '../matrixInClckTw/matrixInClckTw.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JavaRdComponent } from '../matrixInJavaRd/matrixInJavaRd.component';
import { JavaRd2Component } from '../matrixInJavaRd2/matrixInJavaRd2.component';

import { FerryPierComponent } from '../matrixInFerryPier/matrixInFerryPier.component';
import { StarFerryComponent } from '../matrixStarFerry/matrixStarFerry.component';
import { TinHauComponent } from '../matrixTinHau/matrixTinHau.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule,
    NgxGaugeModule,
    MatSliderModule,
    SeamlessInputModule
  ],
  declarations: [Tab4Page, CentralComponent, InClckTwComponent, JavaRdComponent, JavaRd2Component, FerryPierComponent, StarFerryComponent,
   TinHauComponent]
})
export class Tab3PageModule {}