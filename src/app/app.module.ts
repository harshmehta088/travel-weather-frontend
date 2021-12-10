import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { Weather } from './weather-service.service';
import { Backend } from './backend-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Weather, Backend],
  bootstrap: [AppComponent]
})
export class AppModule { }
