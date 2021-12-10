import { TestBed } from '@angular/core/testing';

import { Weather } from './weather-service.service';

describe('WeatherServiceService', () => {
  let service: Weather;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weather);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
