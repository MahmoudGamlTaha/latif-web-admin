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
  _updateblogList="https://latifapp.herokuapp.com/api/public/blogs/update"
  _deleteblog = "https://latifapp.herokuapp.com/api/public/blogs/delete?id=";
  _createblog = "https://latifapp.herokuapp.com/api/public/blogs/create";

    _blogCategory = 'https://latifapp.herokuapp.com/api/public/blogCategory';
    _blogCategoryupdate = "https://latifapp.herokuapp.com/api/public/blogCategory/update";
    _deleteblogCategory="https://latifapp.herokuapp.com/api/public/blogCategory/id="
    _createblogCategory=""


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

  updateblogList(blogList: any) {
    const blogId = blogList.id;
    const headers = {params:{id:blogId} };

    console.log('blogList : ', blogList.title)
    console.log(`${this._updateblogList}?id=${blogId}`);
    
      return this._http.post(this._updateblogList+'?id='+blogList.id+'&title='+blogList.title+'&category='+blogList.category+'&category_id='+blogList.category_id+'&path='+blogList.path+'&'+
      'description='+blogList.description+'&'+'image='+blogList.image+'&'+'images='+blogList.images+'&external='+blogList.externalLink,blogList);
    }

    createBlogList(blogCategory: IblogList) {
      console.log(blogCategory);
      return this._http.post<IblogList>(this._createblog , blogCategory).subscribe(data => {
        console.log(data);
      });
    }

  deleteblogList(blogId) {
alert(blogId)
  return  this._http.post(this._deleteblog+blogId,'').subscribe(
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

    updateblogCategory(blogCategory: IblogList) {

      return this._http.post(this._blogCategoryupdate + blogCategory.id, blogCategory).subscribe(data => {
        console.log(data);
      });
    }


    deleteblogCategory(blogCategoryId) {

      return  this._http.post(this._deleteblogCategory+blogCategoryId,'').subscribe(
              res => {console.log(res);})
    }
}
