import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent1 } from './google-maps1.component';
import { GoogleMapsRoutingModule1 } from './google-maps1-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    GoogleMapsRoutingModule1,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSAkaptn0zFktVeToQzsEPm9zSf-ejlj0'
      // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    })
  ],
  providers: [],
  declarations: [ GoogleMapsComponent1 ],
  bootstrap: [ GoogleMapsComponent1 ]
})
export class GoogleMapsModule1 {}
