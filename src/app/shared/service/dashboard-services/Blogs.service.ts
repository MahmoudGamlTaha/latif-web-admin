import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IblogCategory, IblogList } from './IcategoryList';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  _blogList = 'https://latifapp.herokuapp.com/api/public/blogs';
  _blogListupdate="https://latifapp.herokuapp.com/api/public/blogs/update?"
    _deleteblog = "https://latifapp.herokuapp.com/api/public/blogs/delete/id=";
  
    _blogCategory = 'https://latifapp.herokuapp.com/api/public/blogCategory';
    _blogCategoryupdate = "https://latifapp.herokuapp.com/api/public/blogCategory/update";
    _deleteblogCategory="https://latifapp.herokuapp.com/api/public/blogCategory/id="

  _categoryTypeList = 'https://latifapp.herokuapp.com/api/public/ads-type/list';
  constructor(public _http: HttpClient) { }
  


  getblogList(): Observable<IblogList[] > {
    return this._http.get<IblogList[]>(this._blogList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  updateblogList(blogCategory: Object) {
      let endPoints = blogCategory;
      return this._http.put(this._blogListupdate + endPoints, blogCategory).subscribe(data => {
        console.log(data);
      });
    }

  deleteblogList(blogId) {
alert(blogId)
  return  this._http.delete(this._deleteblog+blogId).subscribe(
        res => {
          console.log(res);
      })

  }

  getblogCategory(): Observable<IblogCategory[] > {
    return this._http.get<IblogCategory[]>(this._blogCategory)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  deleteblogCategory(blogCategoryId) {

    return  this._http.delete(this._deleteblogCategory+blogCategoryId).subscribe(
          res => {
            console.log(res);
        })
  
    }

    updateblogCategory(blogCategory: Object) {
      let endPoints = blogCategory;
      return this._http.put(this._blogCategoryupdate + endPoints, blogCategory).subscribe(data => {
        console.log(data);
      });
    }


}
