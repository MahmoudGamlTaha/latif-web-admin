import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  public countryList = [];
  isLoading: boolean = true ;
  closeResult;
  deletedItemId;
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
      id: {
        title: 'id',
      },
      nameAr: {
        title: 'nameAr',
      },
      nameEn: {
        title: 'nameEn',
      },
      // country: {
      //   title: 'country',
      // },
    },
  };

  ngOnInit() {
    this.countriesSer.getCountriesList().subscribe(
      (data: any) => {
        this.isLoading = false;
        this.countryList = data.response.data;
        console.log(this.countryList)
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

}