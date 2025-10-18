import { Component } from '@angular/core';
import { PopulationData } from './population-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-country-population',
  imports: [],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation {
  country: PopulationData[] = [];

  constructor(private http: HttpClient) {
    // You can initialize your component here
    http.get<PopulationData[]>(environment.apiUrl + "api/Countries/population/26").subscribe(data => {
      this.country = data;
    });

  }

}
