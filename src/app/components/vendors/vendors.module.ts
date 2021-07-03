import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsRoutingModule } from './vendors-routing.module';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { CreateVendorsComponent } from './policy/create-vendors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CityListComponent } from './Countris/city-list/city-list.component';
import { CountryListComponent } from './Countris/country-list/country-list.component';
import { CreateCityComponent } from './Countris/create-city/create-city.component';
import { CreateCountryComponent } from './Countris/create-country/create-country.component';
import { statuscountryComponent } from './Countris/statuscountry/status-country.component';
import { statuscityComponent } from './Countris/statusCity/statusCity.component';

@NgModule({
  declarations: [ListVendorsComponent,statuscountryComponent,statuscityComponent, CreateVendorsComponent ,CityListComponent , CountryListComponent, CreateCityComponent, CreateCountryComponent ],
  imports: [
    CommonModule,    
    NgbModule,
    VendorsRoutingModule,    
    Ng2SmartTableModule,
    NgbModule,
    ReactiveFormsModule,
  ]
})
export class VendorsModule { }
