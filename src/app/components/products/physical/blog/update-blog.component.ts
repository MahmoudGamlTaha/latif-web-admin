import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit {
  updateForm: FormGroup;
  blogId;
  data;
  Id;
  Title
  Category;
  CategoryAr;
  Description:string;
  category_id:number;
  Username:string;
  fullname:string;
  userId:bigint;
  mobile:string;
  images:[];
  closeResult;
  constructor(private fb: FormBuilder, private blogServ:BlogsService
    ,private router:ActivatedRoute,private route:Router, private modalService: NgbModal) {
    this.blogId = this.router.snapshot.paramMap.get("id");
    this.isLoading = false;
    this.getblogDetails();
  }
  isLoading:boolean;
  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id: [this.blogId],
      title: [this.Title],
      category: [this.Category],
      description: [this.Description],
      name: [this.fullname],
      username:[this.Username]
    //  mobile:[this.mobile]

    })
  }
  getblogDetails(){
    this.blogServ.getblog(this.blogId)
    .subscribe((data: any) => {
      this.Id = data.response.data.id
      this.Title = data.response.data.title
      this.Category = data.response.data.category
      this.Description = data.response.data.description;
      if(data.response.data.user != null){
        this.Username = data.response.data.user.username;
        this.userId = data.response.data.user.id;
        this.mobile = data.response.data.user.phone;
        this.fullname = data.response.data.user.firstName +' '+ data.response.data.user.lastName;
      }
      this.CategoryAr = data.response.data.categoryAr;
      this.category_id = data.response.data.category_id;
      this.images = data.response.data.images;
    
      this.isLoading = true;
      console.log(this.fullname);
    }, (err) => {
      console.log("err", err)
    })
  }
  update() {

    console.log(this.updateForm.value)

    // if (!this.updateForm.valid) { return; }
    // this.blogServ.updateblogList(this.updateForm.value)
    //   .subscribe((data: any) => {
    //     console.log(data)
    //     this.route.navigate(['products/blogs/blog-list'])

    //   }, (err) => {
    //     console.log("err", err)
    //   })
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }
}
