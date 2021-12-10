import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Backend {
  
  constructor(private httpClient:HttpClient) { 

  }

  getCityDetails(cityname:any){
    return this.httpClient.get('http://travelplanning-env.eba-itfxxtam.us-east-1.elasticbeanstalk.com/city/'+cityname)
  }

  getListOfCities(){
    return this.httpClient.get('http://travelplanning-env.eba-itfxxtam.us-east-1.elasticbeanstalk.com/listofcities')
  }
}
