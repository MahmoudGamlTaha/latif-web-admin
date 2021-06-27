import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Blog } from 'src/app/shared/models/blog.model';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { CitesService } from 'src/app/shared/service/dashboard-services/cites.service';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
  providers: [NgbRatingConfig]
})
export class CreateBlogComponent implements OnInit {

  public blogForm: FormGroup;
  public blogCategoryList;
  userList: any;
  public imgList:String[] = [];

  constructor(private blogSer: BlogsService, private userService: UsersService, private categorySer: CategoryService, private citiesSer: CitesService,
    private formBuilder: FormBuilder, private activateRouter: ActivatedRoute,  private router: Router) {
    this.userService.userList().subscribe(
      (data: any) => {
        this.userList = data.response.data
        console.log(this.userList)
      }, (err) => console.log("err", err)
    )
    this.getblogCategory()
  }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      Category:['',[Validators.required]],
      Title: ['',[Validators.required]],
      ExtrnImage: [],
      UserId: ['',[Validators.required]],
      Description: ['',[Validators.required]],
      External: [''],
    });
  }
  getblogCategory() {
    this.blogSer.getblogCategory().subscribe(
      (data: any) => {
        this.blogCategoryList = data.response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  typeDropDown(event) {
    console.log(event.target.value)
  }
  onClickToggle(event) {
    console.log(event.target.checked)
  }
  get Category() {
    return this.blogForm.get('Category');
  }
  get Title() {
    return this.blogForm.get('Title');
  }
  get ExtrnImage() {
    return this.blogForm.get('ExtrnImage');
  }
  get Description() {
    return this.blogForm.get('Description');
  }
  get UserId() {
    return this.blogForm.get('UserId');
  }
  get External() {
    return this.blogForm.get('External');
  }

  create(){
    if(!this.blogForm.valid){
      return ;
    }
    console.log(this.blogForm.value)
    let formValue = this.blogForm.value;
    let blog:Blog = new Blog();
    blog.external = formValue.External;
    blog.description = formValue.Description;
    blog.title = formValue.Title;
    blog.category = formValue.Category;
    blog.userId = formValue.userId;
   if(formValue.ExtrnImage){
     formValue.ExtrnImage.array.forEach(element => {
       this.imgList.push(element);
     });
    }
    blog.extrnImage = this.imgList; 
    console.log(blog)
    this.blogSer.createBlog(blog).subscribe(
      (data:any)=>{
        this.router.navigate(['/products/blogs/update-blog/', data.response.data.id]);
      },(err)=>{console.log("err",err)}
    )
  }


}
