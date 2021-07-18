import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { city } from 'src/app/shared/models/city';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  createForm:FormGroup
  countryList: any;
  constructor(private fb:FormBuilder,private countriesSer:CountriesService,private route:Router) {


  }

  ngOnInit(): void {
    this.createForm=this.fb.group({
      city:['',[Validators.required,Validators.minLength(3)]],
      cityAr:['',[Validators.required,Validators.minLength(3)]],
      country:['',[Validators.required]],
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
  get city(){
    return this.createForm.get('city')
  }
  get cityAr(){
    return this.createForm.get('cityAr')
  }
  get country(){
    return this.createForm.get('country')
  }
  get active(){
    return this.createForm.get('active')
  }
  create(){    
    let createcity:city
    let form:city =this.createForm.value

    if(!this.createForm.valid){return ;}
    
    createcity={ 
      cityAr: form.cityAr,
      city:form.city,
      country:form.country,
      active:form.active,
    }

    this.countriesSer.createcity(createcity)
    .subscribe((data:any)=>{
      console.log(data)
      this.route.navigate(['configuration/city-list'])
    },
      (err)=>{
      console.log("err",err)
    })
  }

}
