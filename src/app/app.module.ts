import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //lisatud seoses Complaint matrix134
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; //lisatud seoses Complaint matrix134

//import { FlashMessagesModule } from 'angular2-flash-messages';

//import { EfektComponent } from './matrixEfekt/matrixEfekt.component';
//import { KOVMaakondComponent } from '../app/matrixKOVMaakond/matrixKOVMaakond.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, BrowserAnimationsModule, NoopAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
