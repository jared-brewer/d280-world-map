// Task C: Selected World Bank API properties:
// 1. name
// 2. capitalCity
// 3. region.value
// 4. incomeLevel.value
// 5. latitude
// 6. longitude 

import { HttpClient } from '@angular/common/http';

import { inject } from '@angular/core';

import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class MapComponent {
  selectedCountry: any = null;

  http = inject(HttpClient);

  onCountryClick(event: MouseEvent) {
    const element = event.target as SVGPathElement;

    const countryName = element.getAttribute('name');
    const countryCode = element.getAttribute('id');

    console.log('Clicked country:', countryName, countryCode);

    if (!countryCode) {
      console.warn('No country code found on clicked element.');
      return;
  }

  const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;

  this.http.get<any>(url).subscribe({
    next: (response) => {
      const data = response[1][0]; // World Bank puts data in response[1]

      this.selectedCountry = {
        name: data.name,
        capitalCity: data.capitalCity,
        region: { value: data.region.value },
        incomeLevel: { value: data.incomeLevel.value },
        latitude: data.latitude,
        longitude: data.longitude
      };

      console.log('API Data:', this.selectedCountry);
    },
    error: (err) => {
      console.error('API error:', err);
    }
  });
}
}
