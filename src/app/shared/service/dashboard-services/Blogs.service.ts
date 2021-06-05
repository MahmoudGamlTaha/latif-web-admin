import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { IblogCategory, IblogList } from './Iblog';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  _blogList = server.url + 'api/public/blogs';
  _updateblogList = server.url + "api/public/blogs/update"
  _deleteblog = server.url + "api/public/blogs/delete?id=";
  _createblog = server.url + "api/public/blogs/create";

  _blogCategory = server.url + 'api/public/blogCategory';
  _blogCategoryupdate = server.url + "api/public/blogCategory/update";
  _deleteblogCategory = server.url + "api/public/blogCategory/id="
  _createblogCategory = ""
  _categoryTypeList = server.url + 'api/public/ads-type/list';
  constructor(public _http: HttpClient) { }



  getblogList(): Observable<IblogList[]> {
    return this._http.get<IblogList[]>(this._blogList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  updateblogList(blogList: any) {
    const blogId = blogList.id;
    const headers = { params: { id: blogId } };

    return this._http.post(this._updateblogList + '?id=' + blogList.id + '&title=' + blogList.title + '&category=' + blogList.category + '&category_id=' + blogList.category_id + '&path=' + blogList.path + '&' +
      'description=' + blogList.description + '&' + 'image=' + blogList.image + '&' + 'images=' + blogList.images + '&external=' + blogList.externalLink, blogList);
  }

  createBlogList(blog) {
    console.log(blog);
    return this._http.post<IblogList>(this._createblog, {_external:blog.externalLink,
      category:blog.BlogId,description:blog.Description,extrnImage:blog.Image,title:blog.Type,userId:blog.UserId});
  }

  deleteblogList(blogId) {
    alert(blogId)
    return this._http.post(this._deleteblog + blogId, '');

  }

  getblogCategory(): Observable<IblogCategory[]> {
    return this._http.get<IblogCategory[]>(this._blogCategory)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  updateblogCategory(blogCategory: IblogList) {

    return this._http.post(this._blogCategoryupdate + blogCategory.id, blogCategory).subscribe(data => {
      console.log(data);
    });
  }


  deleteblogCategory(blogCategoryId) {

    return this._http.post(this._deleteblogCategory + blogCategoryId, '').subscribe(
      res => { console.log(res); }, 
      )
  }
}
