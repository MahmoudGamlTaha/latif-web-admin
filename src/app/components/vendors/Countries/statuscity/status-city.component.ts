import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';
@Component({
  selector: 'app-statuscity',
  templateUrl: './status-city.component.html',
  styleUrls: ['./status-city.component.scss']
})
export class StatusCityComponent implements ViewCell, OnInit {

  renderValue: boolean;
  idValue: number;
  @Input() value: string | number | any;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private countryService: CountriesService) { }

  onClick(event) {

    let check:boolean = event.target.checked;
    this.save.emit(this.rowData);
     let country:number = event.target.id;
  
    
  }
  ngOnInit(): void {
    this.renderValue = this.value
    this.idValue = this.rowData.id
    console.log(this.renderValue)

    console.log("child2", this.idValue)
  }

}
