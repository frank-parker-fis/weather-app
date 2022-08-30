import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CityI } from '../model/city.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
})
export class SearchCityComponent implements OnInit {
  weatherForm: FormGroup = this.fb.group({
    city: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z]{1,}/),
    ]),
  });
  title = 'weather-app';

  constructor(
    private weatherServer: WeatherService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  /* 
    descritption: it will return the form value
    params: void
    return: return formcontorl name
  */
  get city() {
    return this.weatherForm.get('city');
  }
  /* 
    descritption: it will query the entered the city results
    params: void
    return: void
  */
  search(): void {
    console.log(this.city?.value);
    this.weatherServer.getCity(this.city?.value).subscribe(
      (res) => {
        //console.log(res);
        const cityWeatherDetails: CityI = {
          temp_f: res?.current?.temp_f,
          wind_mph: res?.current?.wind_mph,
          condition: res?.current?.condition?.text,
        };
        this.router.navigate([`/${this.city?.value}`], {
          queryParams: cityWeatherDetails,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
