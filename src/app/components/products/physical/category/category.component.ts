import { Component, OnInit } from '@angular/core';
import { categoryDB } from '../../../../shared/tables/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public closeResult: string;
  public categories = []

  constructor(private modalService: NgbModal,private BlogsSer: BlogsService) {
    // this.categories = categoryDB.category;
    
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
      position: 'right',
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
      // 'user.firstName': {
      //   title: 'Name',
      //   valuePrepareFunction: (cell, row) => { return row.user.firstName }
      // },
      category: {
        title: 'Category',
      } ,
      title: {
        title: 'title',
      },
      description: {
        title: 'description',
        valuePrepareFunction: (cell, row) => { return row.description.slice(0, 30); }
        
      },
      createdDate: {
        title: 'createdDate'
      },
      img: {
        title: 'Image',
        type: 'html'
      }

    }
  };

  ngOnInit() {

  this.BlogsSer.getblogList().subscribe(
      (data: any) => {
        this.categories = data.response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
    
  }


  onDeleteConfirm(event){ 

    alert(event.data.id)

    
    if (window.confirm('Are you sure you want to save?')) {
    
      this.BlogsSer.deleteblogList(parseInt(event.data.id))
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }

  }

  onEditConfirm(event){

  }
      
      

}
