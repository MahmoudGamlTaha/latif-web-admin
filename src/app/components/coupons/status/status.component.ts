import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements ViewCell, OnInit {

  renderValue: boolean;
  idValue: number;
  @Input() value: string | number | any;
  @Input() rowData: any;
  @Input() action:string = 'Active';
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private adsSer: AdsService) { }

  onClick(event) {
    console.log(event.target.checked)
    this.adsSer.changeStateOfAds(event.target.id, event.target.checked).subscribe(res=> console.log("success"))
    this.save.emit(this.rowData);
  }
  ngOnInit(): void {
    this.renderValue = this.value

    this.idValue = this.rowData.id;
  }

}
