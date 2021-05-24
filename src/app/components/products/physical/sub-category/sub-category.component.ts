import { Component, OnInit } from '@angular/core';
import { categoryDB } from 'src/app/shared/tables/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  public closeResult: string;
  public blog_Category  = []

  constructor(private modalService: NgbModal,private BlogsSer:BlogsService) {
    // this.sub_categories = categoryDB.category;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


  public settings = {
    actions: {
      position: 'right'
    },
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      name: {
        title: 'name',
        type: 'html',
      },
      description: {
        title: 'description'
      },
      icon: {
        title: 'icon',
        type: 'html',
      },
      nameAr: {
        title: 'nameAr'
      },
      
    },
  };

  ngOnInit() {

    this.BlogsSer.getblogCategory().subscribe(
      (data: any) => {
        this.blog_Category = data.response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );

  }

  onDeleteConfirm(event){ 

    alert(event.data.id)

    
    if (window.confirm('Are you sure you want to save?')) {
    
      this.BlogsSer.deleteblogCategory(parseInt(event.data.id))
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }

  }

  onEditConfirm(event){
    this.BlogsSer.updateblogCategory(event.data)
    event.confirm.resolve(event.newData);
  }


  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }
}
