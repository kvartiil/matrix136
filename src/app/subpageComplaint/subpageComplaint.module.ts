import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';




//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { MatDialogModule } from '@angular/material/dialog';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SubpageComplaintPageRoutingModule } from './subpageComplaint-routing.module';

import { SubpageComplaintPage } from './subpageComplaint.page';
//import { ModalComponent } from '../matrixModal/matrixModal.component';

import { ComplaintLamTinComponent } from '../matrixComplaintLamTin/matrixComplaintLamTin.component';

//import { PrgnRbtComponent } from '../matrixPrgnRbt/matrixPrgnRbt.component';
//import { PPrgnRbtComponent } from '../matrixPrgnRbt/matrix-probot-msg/matrix-probot-msg.component';

@NgModule({
  imports: [ FormsModule, MatDialogModule, 
    SubpageComplaintPageRoutingModule, IonicModule, CommonModule
        
  ],
  declarations: [SubpageComplaintPage, ComplaintLamTinComponent]
})
export class SubpagePageModule {}