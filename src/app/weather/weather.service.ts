import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { WeatherData } from "../weather-data";
@Injectable({
    providedIn: 'root'
})
export class WeatherService{
    private baseUrl = 'http://localhost:5174/WeatherForecast';

    constructor(private http: HttpClient) {}
    getWeatherData():Observable<any>{
        return this.http.get<WeatherData[]>(this.baseUrl);
    }
}