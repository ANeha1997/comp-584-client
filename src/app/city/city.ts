import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CityData } from './city-data';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.html',
  styleUrls: ['./city.scss']
})


export class City {
  cities: CityData[] = [];

  constructor(private http: HttpClient) {
    // You can initialize your component here
    this.http.get<CityData[]>(environment.apiUrl + "api/cities").subscribe(data => {
      this.cities = data;
    });

  }

}
