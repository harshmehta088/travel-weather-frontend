import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Weather {

  apiKey = '71cb032ca2633e7ca2693d2d7e98d3de';
  url = 'http://api.openweathermap.org/data/2.5/weather?q='
  forecasturl = 'http://pro.openweathermap.org/data/2.5/forecast/daily?q=';

  constructor(private httpClient: HttpClient) {

  }

  getWeather(cityname: any) {
    return this.httpClient.get(this.url + cityname + '&units=metric' + '&appid=' + this.apiKey)
  }

  getForecastWeather(cityname: any) {
    return this.httpClient.get(this.forecasturl + cityname + '&units=metric' + '&cnt=5' + '&appid=' + this.apiKey)
  }
}
