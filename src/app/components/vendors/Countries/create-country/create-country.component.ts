import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { country } from 'src/app/shared/models/country';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.scss']
})
export class CreateCountryComponent implements OnInit {

  createForm:FormGroup
  countryList: any;
  constructor(private fb:FormBuilder,private countriesSer:CountriesService,private route:Router) {


  }

  ngOnInit(): void {
    this.createForm=this.fb.group({
      countryAr:['',[Validators.required,Validators.minLength(3)]],
      country:['',[Validators.required,Validators.minLength(3)]],
      language:[''],
      active:[true],

    })

    this.countriesSer.getCountriesList().subscribe(
      (data: any) => {
        this.countryList = data.response.data;
        // console.log(this.countryList)
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  get countryAr(){
    return this.createForm.get('countryAr')
  }
  get country(){
    return this.createForm.get('country')
  }
  get language(){
    return this.createForm.get('language')
  }
  get active(){
    return this.createForm.get('active')
  }
  create(){    
    let createcountry:country
    let form:country =this.createForm.value

    if(!this.createForm.valid){return ;}
    
    createcountry={ 
      countryAr: form.countryAr,
      country:form.country,
      language:form.language,
      active:form.active,
    }

    this.countriesSer.createCountry(createcountry)
    .subscribe((data:any)=>{
      console.log(data)
      this.route.navigate(['configuration/country-list'])
    },
      (err)=>{
      console.log("err",err)
    })
  }

}
