// Task C: Selected World Bank API properties:
// 1. name
// 2. capitalCity
// 3. region.value
// 4. incomeLevel.value
// 5. latitude
// 6. longitude 

import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class MapComponent {
  selectedCountry: any = null;

  onCountryClick(event: MouseEvent) {
    const element = event.target as SVGPathElement;

    const countryName = element.getAttribute('name');
    const countryCode = element.getAttribute('id');

    console.log('Clicked country:', countryName, countryCode);

    this.selectedCountry = {
      name: countryName || '',
      capitalCity: '',
      region: { value: '' },
      incomeLevel: { value: '' },
      latitude: '',
      longitude: ''
    };
  }
}
