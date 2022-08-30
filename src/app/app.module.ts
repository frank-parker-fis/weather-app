import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteRoutingModule } from './app.routing.module';
import { CityComponent } from './city/city.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [AppComponent, CityComponent, SearchCityComponent],
  imports: [
    MaterialModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    RouteRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
