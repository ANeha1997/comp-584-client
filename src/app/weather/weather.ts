import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
weather: any;
forecasts: WeatherData[] = [];

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeatherData().subscribe(data => {
      // console.log(data);
      this.forecasts = data;  });
  }

}
