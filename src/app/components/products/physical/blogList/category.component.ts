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
  isLoading: boolean = true;
  deletedItemId;
  constructor(private modalService: NgbModal, private BlogsSer: BlogsService) {

  }

  public settings = {
    actions: {
      position: 'right',
      edit: false,
      add: false,
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    // add: {
    //   confirmCreate: false,
    // },
    // edit: {
    //   confirmSave: true,
    // },
    columns: {
      // 'user.firstName': {
      //   title: 'Name',
      //   valuePrepareFunction: (cell, row) => { return row.user.firstName }
      // },
      id: {
        title: 'id',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return "<a href='#/products/blogs/update-blog/"+row.id+"' >" + row.id + "</a>"
        }
      },
      category: {
        title: 'Category',
        type: 'integer'
      },
      title: {
        title: 'title',
      },
      description: {
        title: 'description',
        filter: false,
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.description.slice(0, 30); },


      },
      createdDate: {
        title: 'createdDate', filter: false,
      },
      image: {
        title: 'Image', filter: false,
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          if (row.image != null && row.image != undefined && row.image != '') {
            return "<img src='" + row.image + "' width='50' height='50' />"
          }
        }
      }
    }
  }
  ngOnInit() {

      this.BlogsSer.getblogList().subscribe(
        (data: any) => {
          this.isLoading = false
          this.categories = data.response.data
        },
        (error) => {
          this.isLoading = false
          console.log('error', error);
        });
    }

  delete(id) {
      this.BlogsSer.deleteblogList(id).subscribe(
        res => console.log(res)
      )

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

  onDeleteConfirm(event, content) {
      console.log("asd", event.data.id, content)
      this.deletedItemId = event.data.id
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }


