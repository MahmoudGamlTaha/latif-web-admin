import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';
import { CityListComponent } from './Countris/city-list/city-list.component';
import { CountryListComponent } from './Countris/country-list/country-list.component';
import { CreateCityComponent } from './Countris/create-city/create-city.component';
import { CreateCountryComponent } from './Countris/create-country/create-country.component';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { CreateVendorsComponent } from './policy/create-vendors.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],

    children: [

      {
        path: 'city-list',
        component: CityListComponent,
        data: {
          title: "city list",
          breadcrumb: "city list"
        }
      },
      {
        path: 'country-list',
        component: CountryListComponent,
        data: {
          title: "country list",
          breadcrumb: "country list"
        }
      }, 
      {
        path: 'create-city',
        component: CreateCityComponent,
        data: {
          title: "create city",
          breadcrumb: "create city"
        }
      },
      {
        path: 'create-country',
        component: CreateCountryComponent,
        data: {
          title: "create city",
          breadcrumb: "create city"
        }
      },
      // {
      //   path: 'list-vendors',
      //   component: ListVendorsComponent,
      //   data: {
      //     title: "Vendor List",
      //     breadcrumb: "Vendor List"
      //   }
      // },
      {
        path: 'policy',
        component: CreateVendorsComponent,
        data: {
          title: "policy",
          breadcrumb: "policy"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendorsRoutingModule { }
