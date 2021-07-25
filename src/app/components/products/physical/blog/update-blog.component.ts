import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit {
  updateForm: FormGroup;
  blogId
  data
  Id
  Title
  Category
  Description
  Username
  userId:bigint;
  mobile:string;

  constructor(private fb: FormBuilder, private blogServ:BlogsService
    ,private router:ActivatedRoute,private route:Router) {
    this.blogId=this.router.snapshot.paramMap.get("id")
    console.log(this.blogId)

  }

  ngOnInit(): void {

    this.blogServ.getblog(this.blogId)
    .subscribe((data: any) => {
      this.Id = data.response.data.id
      this.Title = data.response.data.title
      this.Category = data.response.data.category
      this.Description = data.response.data.description
      this.Username = data.response.data.user.username
      this.userId = data.response.data.user.id;
      this.mobile = data.response.data.user.phone;
    }, (err) => {
      console.log("err", err)
    })
    this.updateForm = this.fb.group({
      id: [this.blogId],
      title: [this.Title],
      category: [this.Category],
      description: [this.Description],
      username: [this.Username],
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

}
