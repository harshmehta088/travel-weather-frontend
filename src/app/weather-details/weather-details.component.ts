import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather-service.service';
import { Backend } from '../backend-service.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  weatherData: any;
  cityDetails: any;
  cities: any;
  selected: boolean = false;
  forecast: boolean = false;
  forecastList: any;
  constructor(private weatherService: Weather, private backendService: Backend) { }

  ngOnInit(): void {
    this.backendService.getListOfCities().subscribe((res: any) => {
      this.cities = res;
      console.log(res);
    })
  }

  onSelect(city: string): void {

    this.weatherService.getWeather(city).subscribe((response: any) => {
      this.setweatherData(response);
      console.log(response);
      this.weatherData = response;
    });

    this.backendService.getCityDetails(city).subscribe((data: any) => {
      this.cityDetails = data;
      this.selected = true;
      console.log(data);
    });
    this.forecast = false;
  }

  getForecastData(city: string): void {

    this.weatherService.getForecastWeather(city).subscribe((response: any) => {
      console.log(response);
      this.forecastList = response;
      this.forecast = true;
    });
  }
  setweatherData(data: any) {
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let d = new Date();
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let currentDate = new Date(utc + (3600000 * (this.weatherData.timezone)));
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
  }
}
