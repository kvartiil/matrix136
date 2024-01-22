import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpagePrgnRbtPage } from './subpagePrgnRbt.page';

const routes: Routes = [
  {
    path: '',
    component: SubpagePrgnRbtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpagePrgnRbtPageRoutingModule {}