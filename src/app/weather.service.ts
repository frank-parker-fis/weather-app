import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  httpHeader = new HttpHeaders({
    'X-RapidAPI-Key': '967d161a6fmsh6d884ac6d4a6234p1537ccjsne551155876b7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  /* 
    descritption: it will return observale
    params: cityName
    return: return observale
  */
  getCity(cityName: string): Observable<any> {
    return this.http.get(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`,
      {
        headers: this.httpHeader,
      }
    );
  }

  /* 
    descritption: it will return the observale
    params: city
    return: return observale
  */
  searchCity(city: string): Observable<any> {
    return this.http.get(
      `https://weatherapi-com.p.rapidapi.com/search.json?q=${city}`,
      {
        headers: this.httpHeader,
      }
    );
  }
}
