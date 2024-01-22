import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpageTamarPageRoutingModule } from './subpageTamar-routing.module';

import { SubpageTamarPage } from './subpageTamar.page';

//import { ClientRobotComponent } from '../matrixClientRobot/matrixClientRobot.component';
//import { CClientRobotComponent } from '../matrixClientRobot/matrix-robot-msg/matrix-robot-msg.component';

import { TamarComponent } from '../matrixTamar/matrixTamar.component';
import { WestPromenadeComponent } from '../matrixWestPromenade/matrixWestPromenade.component';
import { PlayConsultantComponent } from '../matrixPlayConsultant/matrixPlayConsultant.component';
import { PlayConsultant2Component } from '../matrixPlayConsultant2/matrixPlayConsultant2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpageTamarPageRoutingModule
  ],
  declarations: [SubpageTamarPage, TamarComponent, WestPromenadeComponent, PlayConsultantComponent, 
  PlayConsultant2Component]
})
export class SubpagePageModule {}