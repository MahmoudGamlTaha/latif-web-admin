import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
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

  @Output() save: EventEmitter<any> = new EventEmitter();



  constructor(private userSer:UsersService) { }

  ngOnInit(): void {
    this.renderValue = this.value

    this.idValue = this.rowData.id
    // console.log(this.renderValue)

    // console.log("child2", this.idValue)
  }
  onClick(event) {

    // console.log(event.target.checked)
    this.userSer.activate(event.target.id, event.target.checked).subscribe(
      res=> console.log("success")
      )
    this.save.emit(this.rowData);
    // console.log(event.target.id)
  }
}
