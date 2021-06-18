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
  public blogCategoryList  = []
  isLoading: boolean = true;

  constructor(private modalService: NgbModal,private BlogsSer:BlogsService) {
  
  }


  public settings = {
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
        title: 'description',
        filter: false,
      },
      icon: {
        title: 'icon',
        type: 'html',
        filter: false,
        valuePrepareFunction:(cell,row)=>{
          if (row.icon != null && row.icon != undefined && row.icon != '') {
          return "<img src='"+row.icon+"' width='50' height='50' />";
          }else{return ;}
          }
      },
      // nameAr: {
      //   title: 'nameAr'
      // },
      
    },
  };

  ngOnInit() {

    this.BlogsSer.getblogCategory().subscribe(
      (data: any) => {
        this.isLoading = false ;
        this.blogCategoryList = data.response.data;
      },
      (error) => {
        this.isLoading = false
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
