import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'google-maps.component.html',
  styleUrls: ['google-maps.component.css'],
})
export class GoogleMapsComponent {
  title: string = '';
  lat: number = 55.751244;
  lng: number = 37.618423;
  zoom: number = 11;

  markers: marker[] = [
    {
      lat: 55.752121,
      lng: 37.617664,
      label: 'K',
      draggable: false,
      title: 'Kremlin',
      www: 'http://www.en.kremlin.ru/'
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
