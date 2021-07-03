import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { countries } from 'src/app/shared/models/cityFiltterByCountry';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';
import { statuscityComponent } from '../statusCity/statusCity.component';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  public cityList = [];
  isLoading: boolean = true ;
  closeResult;
  deletedItemId;
  countryList: any;
  constructor(private modalService: NgbModal,private countriesSer:CountriesService) {
    // this.report = reportDB.report;
  }


  public settings = {
    hideSubHeader: true,
    actions: {
      
      position: 'right',
      edit:false,
      add:false
    },
      delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    columns: {
      // country.id

      id: {
        title: 'id',
      },
      cityAr: {
        title: 'cityAr',
      },
      cityEn: {
        title: 'cityEn',
      },
      active: {
        title: 'Active',
        type: 'custom',
        filter: false,
        renderComponent: statuscityComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // alert(`${row.active} saved!`)
          });
        },
        valuePrepareFunction: (cell, row) => {
          console.log(row.active)
          if(row.active){return row.active }else{
          }
          },
      },
    },
  };
  ngOnInit() {
    this.countriesSer.getcitesList().subscribe(
      (data: any) => {
        this.isLoading = false;
        this.cityList = data.response.data;
        console.log(this.cityList)
      },
      (error) => {
      this.isLoading = false
        console.log('error', error);
      }
    );

    this.countriesSer.getCountriesList().subscribe(
      (data: any) => {
        this.isLoading = false;
        this.countryList = data.response.data;
        // console.log(this.countryList)
      },
      (error) => {
      this.isLoading = false
        console.log('error', error);
      }
    );
  }

      delete(id) {
        console.log(id)


  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

onDeleteConfirm(event,content){
console.log("asd",event.data.id,content)
this.deletedItemId=event.data.id
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}
OnDropDownChange(event){
  let countryId:countries;
  countryId = {id:parseInt(event.target.value)}
  this.countriesSer.findByCountryId(countryId).subscribe(
    (data: any) => {
      this.isLoading = false;
      this.cityList = data.response.data;
      console.log(this.cityList)
    },
    (error) => {
    this.isLoading = false
      console.log('error', error);
    }
  );
console.log(event.target.value)
}
}
