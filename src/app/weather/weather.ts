import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-weather',
  imports: [AsyncPipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
// weather: any;
forecasts$: Observable<WeatherData[]>;

  // constructor(private weatherService: WeatherService) {
  //   this.forecasts$ = this.weatherService.getWeatherData();
     
  // }
constructor(private http:HttpClient)
{
    this.forecasts$ = http.get<WeatherData[]>('http://localhost:5174/WeatherForecast/');
}
     
  }
import { A } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';

