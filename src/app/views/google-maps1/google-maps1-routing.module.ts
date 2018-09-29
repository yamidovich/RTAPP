import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsComponent1 } from './google-maps1.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsComponent1,
    data: {
      title: 'Google Maps'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapsRoutingModule1 {}
