import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';
@Component({
  selector: 'app-status-country',
  templateUrl: './status-country.component.html',
  styleUrls: ['./status-country.component.scss']
})
export class StatusCountryComponent implements ViewCell, OnInit {

  renderValue: boolean;
  idValue: number;
  @Input() value: string | number | any;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private countriesSer:CountriesService) { }

  onClick(event) {

    console.log(event.target.checked)
    this.countriesSer.updateStateCountry(event.target.id, event.target.checked).subscribe(res=> console.log("success"))
    this.save.emit(this.rowData);
    console.log(event.target.id)
  }
  ngOnInit(): void {
    this.renderValue = this.value

    this.idValue = this.rowData.id
    console.log(this.renderValue)

    console.log("child2", this.idValue)
  }

}
