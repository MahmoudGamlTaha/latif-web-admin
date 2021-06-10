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
      confirmCreate: false,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      // 'user.firstName': {
      //   title: 'Name',
      //   valuePrepareFunction: (cell, row) => { return row.user.firstName }
      // },
      id: {
        title: 'id',
        type: 'integer'
      } ,
      category: {
        title: 'Category',
        type: 'integer'
      } ,
      title: {
        title: 'title',
      },
      description: {
        title: 'description',
        valuePrepareFunction: (cell, row) => { return row.description.slice(0, 30); },
        type: 'string'
        
      },
      createdDate: {
        title: 'createdDate'
      },
      image: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction:(cell,row)=>{
          if (row.image != null && row.image != undefined && row.image != '') {
          return "<img src='"+row.image+"' width='50' height='50' />";
        }
          }
      }

    }
  };

  ngOnInit() {
  
    this.BlogsSer.getblogList().subscribe(
      (data: any) => {
        this.categories = data.response.data
      },
      (error) => {
        console.log('error', error);
      } );
  }


  onDeleteConfirm(event){ 

    alert(event.data.id)

    
    
      this.BlogsSer.deleteblogList(parseInt(event.data.id)).subscribe(
        res=> console.log(res)
      )
      event.confirm.resolve(event.newData);
    

  }

  onEditConfirm(event){
    console.log(event.data)
    this.BlogsSer.updateblogList(event.data).subscribe(res => {
      console.log('Success : ', res)
    }, err => {
      console.log('EError : ', err)
    })
    event.confirm.resolve(event.newData);
  }
      
  onCreateConfirm(event) {
    console.log(event)
    this.BlogsSer.createBlogList(event.data)
    event.confirm.resolve(event.newData);

  }

}
