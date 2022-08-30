import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CityI } from '../model/city.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  selectedCity: any;
  cityName: string = '';
  public cities: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParams();
  }
  /* 
    descritption: it will return the city results
    params: void
    return: return void
  */
  getParams(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityName') || '';
    this.route.queryParamMap.subscribe((data: any) => {
      if (data) {
        this.selectedCity = {
          condition: data?.params.condition,
          temp_f: data?.params.temp_f,
          wind_mph: data?.params.wind_mph,
        };
        this.search();
      }
    });
  }

  /* 
    descritption: it will return the city results
    params: void
    return: return void
  */
  search(): void {
    this.weatherService.searchCity(this.cityName).subscribe(
      (res) => {
        console.log(res);
        if (res?.length) {
          this.cities = res;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /* 
    descritption: it will return the form value
    params: void
    return: return goback to preivous page
  */
  goBack(): void {
    this.router.navigate(['']);
  }
}
