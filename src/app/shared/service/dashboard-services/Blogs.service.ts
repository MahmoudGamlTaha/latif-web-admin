import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { IblogCategory, IblogList } from './Iblog';
import { Icategory } from './Icategory';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  // Blogs URL
  _blogList = server.url + 'api/public/blogs';
  _updateblogList = server.url + "api/public/blogs/update"

  _getblog = server.url + "api/public/blogs/id="

  _deleteblog = server.url + "api/public/blogs/delete?id=";
  _createblog = server.url + "api/public/blogs/create";
  token;
  headers;
  constructor(public _http: HttpClient) {

    this.token = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    })
  }

  getblogList(): Observable<IblogList[]> {
    return this._http.get<IblogList[]>(this._blogList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  getblog(blogId: any) {

    console.log(this.token)

    return this._http.get(this._getblog + blogId, { headers: this.headers });
  }
  updateblogList(blogList: any) {

    console.log(this.token)

    return this._http.post(this._updateblogList + '?id=' + blogList.id + '&title=' + blogList.title + '&category=' + blogList.category + '&description=' + blogList.description + '&images=' + blogList.images + '&external=' + blogList.externalLink,
      {},
      { headers: this.headers });
  }

  deleteblogList(blogId) {
    return this._http.post(this._deleteblog + blogId,
      {},
      { headers: this.headers });
  }

  createBlog(blog) {
    console.log(blog);
    return this._http.post(this._createblog,
      {
        category: blog.category,
        title: blog.title,
        extrnImage: blog.extrnImage,
        userId: blog.UserId,
        description: blog.description,
        _external: blog.external
      },
      { headers: this.headers });
  }


  // blog category URL
  _blogCategory = server.url + 'api/public/blogCategory';
  _updateblogCategory = server.url + "api/public/blogCategory/update";
  _deleteblogCategory = server.url + "api/public/blogCategory/delete?id="
  _createblogCategory = server.url + "api/public/blogCategory/create"
  _categoryTypeList = server.url + 'api/public/ads-type/list';

  getblogCategory(): Observable<IblogCategory[]> {
    return this._http.get<IblogCategory[]>(this._blogCategory)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  updateblogCategory(blogCategory: Icategory) {
    return this._http.post(this._updateblogCategory,
      { blogCategory },
      { headers: this.headers }).subscribe(data => {
        console.log(data);
      });
  }

  deleteblogCategory(blogCategoryId) {
    return this._http.post(this._deleteblogCategory + blogCategoryId,
      {},
      { headers: this.headers }
    ).subscribe(
      res => { console.log(res); },
    )
  }

}
