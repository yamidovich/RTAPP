import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'google-maps1.component.html',
  styleUrls: ['google-maps1.component.scss'],
})
export class GoogleMapsComponent1 {
  title: string = '';
  lat: number = 59.940266;
  lng: number = 30.313810;
  zoom: number = 11;

  markers: marker[] = [
    {
      lat: 59.940266,
      lng: 30.313810,
      label: 'H',
      draggable: false,
      title: ' Museo Hermitage',
      www: 'http://www.hermitagemuseum.org/'
    },
    {
      lat: 37.394694,
      lng: -122.150333,
      label: 'T',
      draggable: false,
      title: 'Tesla',
      www: 'https://www.tesla.com/'
    },
    {
      lat: 37.331681,
      lng: -122.030100,
      label: 'A',
      draggable: false,
      title: 'Apple',
      www: 'https://www.apple.com/'
    },
    {
      lat: 37.484722,
      lng: -122.148333,
      label: 'F',
      draggable: false,
      title: 'Facebook',
      www: 'https://www.facebook.com/'
    }
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  title: string;
  www: string;
}
