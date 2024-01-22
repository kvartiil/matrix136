import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpageComplaintPage } from './subpageComplaint.page';

const routes: Routes = [
  {
    path: '',
    component: SubpageComplaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpageComplaintPageRoutingModule {}