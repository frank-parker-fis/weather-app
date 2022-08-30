import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { SearchCityComponent } from './search-city/search-city.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCityComponent,
  },
  {
    path: ':cityName',
    component: CityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
