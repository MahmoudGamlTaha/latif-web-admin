import { getLocaleDateFormat } from "@angular/common";
import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { server } from "src/environments/environment";
import { Color } from "../../models/color.model";


@Injectable({
    providedIn: 'root'
  })
export class Colors{
  _colorList   = server.url + '/api/public/color/colors';
  _createColor = server.url + 'api/public/color/create';

  constructor(private http:HttpClient){
 
  }
   getColors(){
    return this.http.get(this._colorList);
  }
  createColor(color:Color){
      return this.http.post(this._createColor, color)
  }

}