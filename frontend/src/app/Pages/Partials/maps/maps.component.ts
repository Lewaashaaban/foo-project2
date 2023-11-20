import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
 
export class MapsComponent implements OnInit {

  ngOnInit(): void {
    // Set the default selected country ID (Lebanon)
    this.selectedCountryId = '0';
    this.center = {
      lat: 33.854721,
      lng: 35.862286
    };
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 33.854721,
    lng: 35.862286
  };
  zoom = 6;

  selectedCountryId: string | null = null; // Track the currently selected country ID

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = (event.latLng.toJSON());
      this.selectedCountryId = null; // Reset the selected country when moving the map
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  countries = [
    {
      id: '0',
      name: 'Lebanon',
      lat: '33.854721',
      lng: '35.862286'
    },
    {
      id: '1',
      name: 'Qatar',
      lat: '25.354826',
      lng: '51.183884'
    },
    {
      id: '2',
      name: 'UAE',
      lat: '23.424076',
      lng: '53.847816'
    },
    {
      id: '3',
      name: 'KSA',
      lat: '23.885942',
      lng: '45.079163'
    },
    {
      id: '4',
      name: 'UK',
      lat: '55.378052',
      lng: '-3.435973'
    },
    {
      id: '5',
      name: 'Netherlands',
      lat: '52.132633',
      lng: '5.291266'
    },
  ];

  // Function to handle country click and update the center
  onCountryClick(country: any) {
    this.center = {
      lat: parseFloat(country.lat),
      lng: parseFloat(country.lng)
    };
    this.selectedCountryId = country.id; // Set the selected country
  }

}
