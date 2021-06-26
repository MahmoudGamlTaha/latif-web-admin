import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  updateForm: FormGroup
  blogId
  blogData
  Id
  Title
  Category
  Description
  Username
  ExternalLink
  constructor(private fb: FormBuilder, private blogServ:BlogsService
    ,private router:ActivatedRoute,private route:Router) {
    this.blogId=this.router.snapshot.paramMap.get("id")
    console.log(this.blogId)

  }

  ngOnInit(): void {

    this.blogServ.getblogById(this.blogId)
    .subscribe((data: any) => {
      this.blogData = data.response.data    
        console.log(this.blogData)
      this.Id = data.response.data.id
      this.Title = data.response.data.title
      this.Category = data.response.data.category
      this.Description = data.response.data.description
      this.ExternalLink = data.response.data.externalLink
    }, (err) => {
      console.log("err", err)
    })
    this.updateForm = this.fb.group({
      id: [this.blogId],
      title: [this.Title],
      category: [this.Category],
      description: [this.Description],
      externalLink: [this.ExternalLink],
    })
  }
  update() {

    console.log(this.updateForm.value)

    if (!this.updateForm.valid) { return; }
    this.blogServ.updateblogById(this.updateForm.value)
      .subscribe((data: any) => {
        console.log(data)
        this.route.navigate(['products/blogs/blog-list'])

      }, (err) => {
        console.log("err", err)
      })
  }

}
